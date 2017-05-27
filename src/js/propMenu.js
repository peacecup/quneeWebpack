//dialog
function showError(error) {
    if(Q.isString(error)){
        showDialog("Error", error);
        return;
    }
    if(error.stack){
        showDialog(error.message, error.stack);
    }
}

function showDialog(title, content){
    if(content === undefined){
        content = title;
        title = null;
    }
    $("#q-message .modal-title").html(title || "消息");
    $("#q-message .modal-body").html(content);
    $('#q-message').modal("show");
}

function hideDialog(){
    $('#q-message').modal("hide");
}

//PopupMenu--在界面上任何一个地方显示一个div
function showDivAt(div, x, y){
    var body = document.documentElement;
    var bounds = new Q.Rect(window.pageXOffset, window.pageYOffset, body.clientWidth - 2, body.clientHeight - 2);
    var width = div.offsetWidth;
    var height = div.offsetHeight;

    if (x + width > bounds.x + bounds.width) {
        x = bounds.x + bounds.width - width;
    }
    if (y + height > bounds.y + bounds.height) {
        y = bounds.y + bounds.height - height;
    }
    if (x < bounds.x) {
        x = bounds.x;
    }
    if (y < bounds.y) {
        y = bounds.y;
    }
    div.style.left = x + 'px';
    div.style.top = y + 'px';
}
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}


//菜单类的封装
/*---------------------------开始-----------------------------------------------*/
var PopupMenu = function(items){
    this.items = items || [];
}
var menuClassName = 'dropdown-menu';
PopupMenu.Separator = 'divider';

PopupMenu.prototype = {
    dom : null,
    _invalidateFlag: true,
    add : function(item){
        this.items.push(item);
        this._invalidateFlag = true;
    },
    addSeparator : function() {
        this.add(PopupMenu.Separator);
    },
    //在哪里展示菜单
    showAt: function(x, y){
        if(!this.items || !this.items.length){
            return false;
        }
        if(this._invalidateFlag){
            this.render();
        }
        this.dom.style.display = "block";
        document.body.appendChild(this.dom);
        showDivAt(this.dom, x, y);
    },
    //隐藏菜单
    hide : function(){
        if(this.dom && this.dom.parentNode){
            this.dom.parentNode.removeChild(this.dom);
        }
    },
    //给菜单渲染内容
    render : function(){
        this._invalidateFlag = false;
        if(!this.dom){
            this.dom = document.createElement('ul');
            this.dom.setAttribute("role", "menu");
            this.dom.className = menuClassName;
            //根据是否可按压（手机）来区分开始事件类型，桌面端为mousedown；鼠标事件
            var startEventName = Q.isTouchSupport ? "touchstart" : "mousedown";
            //如果点击桌面停止修改函数存在
            if(!this.stopEditWhenClickOnWindow){
                var _this = this;
                this.stopEditWhenClickOnWindow = function(evt){
                    if(isDescendant(_this.html, evt.target)){
                        _this.hide();
                    }
                }
            }
            window.addEventListener("mousedown", this.stopEditWhenClickOnWindow, true);
            //阻止菜单元素的默认鼠标按下事件
            this.dom.addEventListener(startEventName, function(evt){
                Q.stopEvent(evt);
            }, false);
        }else{
            this.dom.innerHTML = "";
        }
        //根据菜单选项数据给菜单添加内容
        for (var i = 0,l = this.items.length; i < l; i++) {
            var item = this.renderItem(this.items[i]);
            this.dom.appendChild(item);
        }
    },
    //将字符串中的特殊符号，如<、>、&、,等。
    html2Escape: function(sHtml) {
        return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
    },
    //渲染菜单单个选项
    renderItem : function(menuItem, zIndex){
        var dom = document.createElement('li');
        dom.setAttribute("role", "presentation");
        //判断是否是divede区分项。
        if(menuItem == PopupMenu.Separator){
            dom.className = PopupMenu.Separator;
            dom.innerHTML = " ";
            return dom;
        }
        //如果menuItem是字符串
        if(Q.isString(menuItem)){
            dom.innerHTML = '<a role="menuitem" tabindex="-1" href="#">' + this.html2Escape(menuItem) + '</a>';
            return dom;
        }
        //如果menuItem选项被选中，设定不同的样式
        if(menuItem.selected){
            dom.style.backgroundPosition = '3px 5px';
            dom.style.backgroundRepeat = 'no-repeat';
            dom.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVQ4y2P4//8/AyWYYdQA7AYAAZuamlo7ED+H4naQGNEGQDX/R8PtpBjwHIsBz+lqAGVeoDgQR1MiaRgAnxW7Q0QEK0cAAAAASUVORK5CYII=')";
        }
        //创建a标签，并赋值内容
        var a = document.createElement("a");
        a.setAttribute("role", "menuitem");
        a.setAttribute("tabindex", "-1");
        a.setAttribute("href", "javascript:void(0)");
        dom.appendChild(a);

        var text = menuItem.text || menuItem.name;
        if(text){
            a.innerHTML = this.html2Escape(text);
        }
        var className = menuItem.className;
        if(className){
            dom.className = className;
        }
        //action表示一个响应函数，选项被点击的时候才有的响应函数。
        var call = menuItem.action;
        //this重新存放
        var self = this;

        var onclick = function(evt){
            if (call) {
                call.call(menuItem.scope, evt, menuItem);
            }
            if(!Q.isIOS){
                evt.target.focus();
            }
            setTimeout(function(){
                self.hide();
            }, 100);
        };
        if(Q.isTouchSupport){
//            dom.ontouchstart = onclick;
            a.ontouchstart = onclick;
        }else{
            dom.onclick = onclick;
        }
        return dom;
    }
}
//将菜单的item选项属性从数据属性修改为访问器属性，提供get和set方法。
Object.defineProperties(PopupMenu.prototype, {
    items: {
        get:function(){
            return this._items;
        },
        set: function(v){
            this._items = v;
            this._invalidateFlag = true;
        }
    }
});

//返回当前点击元素或者鼠标的位置
function getPageXY(evt){
    if (evt.touches && evt.touches.length) {
        evt = evt.touches[0];
    }
    return {x: evt.pageX, y: evt.pageY};
}
//初始化menu
function appendInteractionMenu(graph){
    var menu = new PopupMenu();
    function showMenu(evt, graph){
        var xy = getPageXY(evt);
        var x = xy.x, y = xy.y;
        var data = graph.getElementByMouseEvent(evt);
        var items = [];
       if (data) {
           var name = data instanceof Q.Node ? "Node" : "Edge";
           if (data.name) {
               name += " - " + data.name;
           }
           items.push({text: name, disabled: true});
           items.push(PopupMenu.Separator);
       }
       var currentMode = graph.interactionMode;
       var interactons = [
           {text: "默认模式", value: Q.Consts.INTERACTION_MODE_DEFAULT},
           {text: "框选模式", value: Q.Consts.INTERACTION_MODE_SELECTION}
       ];
       for (var i = 0, l = interactons.length; i < l; i++) {
           var mode = interactons[i];
           if (mode.value == currentMode) {
               mode.selected = true;
           }
           mode.action = function (evt, item) {
               graph.interactionMode = item.value;
           };
           items.push(mode)
       }
        items.push(PopupMenu.Separator);
        items.push({text: Q.name + ' - ' + Q.version});
        menu.items = items;
        menu.showAt(x, y);
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    }
    if(Q.isTouchSupport){
        graph.addCustomInteraction({
            onlongpress: function (evt, graph) {
                showMenu(evt, graph)
            },
            onstart: function (evt) {
                menu.hide();
            }
        });
    }else{
        //增加右键点击事件
        graph.html.oncontextmenu = function(evt){
            Q.stopEvent(evt);
            showMenu(evt, graph);
        }
        graph.addCustomInteraction({
            onstart: function (evt) {
                menu.hide();
            }
        });
    }
}

export {appendInteractionMenu};

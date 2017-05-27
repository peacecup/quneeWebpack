function createGraphButton(info, scope){
    if(info.type == "input"){
        var div = document.createElement("div");
        div.style.display = "flex";
        div.innerHTML = `<input type="text" class="form-control"><button class="btn btn-default" type="button"></button>`;
        var input = div.getElementsByTagName("input")[0];
        var button = div.getElementsByTagName("button")[0];
        button.innerHTML = info.name;
        info.input = input;
        if(info.action){
            button.onclick = function(evt){
                info.action.call(scope ||graph, evt, info);
            }
        }
        return div;
    }
    if(!info.type){
        var label = document.createElement("button");
    }else{
        var label = document.createElement("label");
        var button = document.createElement("input");
        info.input = button;
        button.setAttribute('type', info.type);
        label.appendChild(button);
        if (info.selected) {
            button.setAttribute('checked', 'checked');
            if(info.type == 'radio'){
                label.className += "active";
            }
        }
    }
    label.className += " btn btn-default btn-sm";
    if(info.icon){
        var icon = document.createElement('img');
        icon.src = info.icon;
        label.appendChild(icon);
    }else if(info.name){
        label.appendChild(document.createTextNode(" " + info.name));
    }
    if(info.name){
        label.setAttribute("title", info.name);
    }
    if(info.action){
        label.onclick = function(evt){
            info.action.call(scope || graph, evt, info);
        }
    }
    return label;
}

function createToolBar(buttons, toolbar, scope, vertical, togglable){
    for(var n in buttons){
        var info = buttons[n];
        if(Q.isArray(info)){
            var buttonGroup = document.createElement("div");
            buttonGroup.className = vertical ? "btn-group-vertical" : "btn-group";
            if(togglable !== false){
                buttonGroup.setAttribute("data-toggle", "buttons");
            }
            for(var i= 0,l=info.length;i<l;i++){
                if(!info[i].type && togglable !== false){
                    info[i].type = 'radio';
                }
                buttonGroup.appendChild(createGraphButton(info[i], scope));
            }
            toolbar.appendChild(buttonGroup);
            continue;
        }
        toolbar.appendChild(createGraphButton(info, scope));
    }
}

function ensureVisible(node) {
    var bounds = graph.getUIBounds(node);
    var viewportBounds = graph.viewportBounds;
    if (!viewportBounds.contains(bounds)) {
        graph.sendToTop(node);
        graph.centerTo(node.x, node.y);
    }
}


function setInteractionMode(evt, info) {
    graph.interactionMode = info.value;
    graph.currentInteractionMode = info.value;
    if (info.value == Q.Consts.INTERACTION_MODE_CREATE_EDGE) {
        graph.edgeUIClass = info.edgeUIClass;
        graph.edgeType = info.edgeType;
    }
}

function initToolbox() {
    var toolbar = document.getElementById("toolbox");
    var buttons = {
        interactionModes: [{
            name: "默认模式",
            value: Q.Consts.INTERACTION_MODE_DEFAULT,
            selected: true,
            icon: '/images/default_icon.png',
            action: setInteractionMode
        }, {
            name: '框选模式',
            value: Q.Consts.INTERACTION_MODE_SELECTION,
            icon: '/images/rectangle_selection_icon.png',
            action: setInteractionMode
        }, {
            name: '浏览模式',
            value: Q.Consts.INTERACTION_MODE_VIEW,
            icon: '/images/pan_icon.png',
            action: setInteractionMode
        },{
            name: '普通连线',
            value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
            icon: '/images/edge_icon.png',
            action: setInteractionMode
        }, {
            name: '正交直线',
            value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
            icon: '/images/edge_orthogonal_icon.png',
            action: setInteractionMode,
            edgeType: Q.Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL
        }],
        zoom: [{
            name: "放大",
            icon: "/images/zoomin_icon.png",
            action: function() {
                graph.zoomIn()
            }
        }, {
            name: "缩小",
            icon: "/images/zoomout_icon.png",
            action: function() {
                graph.zoomOut()
            }
        }, {
            name: "1:1",
            action: function() {
                graph.scale = 0.5;
            }
        }, {
            name: '纵览',
            icon: '/images/overview_icon.png',
            action: function() {
                this.zoomToOverview()
            }
        }, {
            name: '最大化',
            icon: '/images/fullscreen_icon.png',
            action: function() {
                if ($("#graph_panel").hasClass("maximize")) {
                    $("#graph_panel").removeClass("maximize")
                } else {
                    $("#graph_panel").addClass("maximize")
                }
                graph.updateViewport();
            }
        }],
        find: {
            name: '查找',
            type: "input",
            action: function(evt, info) {
                var name = info.input.value;
                if (!name) {
                    return;
                }
                graph.forEach(function(e) {
                    if (e instanceof Q.Node && (name == e.name || (e.info && e.info.name == name))) {
                        graph.setSelection(e);
                        ensureVisible(e);
                        return false;
                    }
                }, graph);
            }
        }
    };
    createToolBar(buttons, toolbar, graph, false, false);
}

export {initToolbox};
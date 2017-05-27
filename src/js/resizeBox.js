///全屏、重置组件大小组件封装
function ResizeBox(parent, onBoundsChange){
    this.onBoundsChange = onBoundsChange;
    this.parent = parent;
    this.handleSize = Q.isTouchSupport ? 20 : 8;

    this.boundsDiv = this._createDiv(this.parent);
    this.boundsDiv.type = "border";
    this.boundsDiv.style.position = "absolute";
    this.boundsDiv.style.border = "dashed 1px #888";
    var handles = "lt,t,rt,l,r,lb,b,rb";
    handles = handles.split(",");
    for(var i= 0,l=handles.length;i<l;i++){
        var name = handles[i];
        var handle = this._createDiv(this.parent);
        handle.type = "handle";
        handle.name = name;
        handle.style.position = "absolute";
        handle.style.backgroundColor = "#FFF";
        handle.style.border = "solid 1px #555";
        handle.style.width = handle.style.height = this.handleSize + "px";
        var cursor;
        if(name == 'lt' || name == 'rb'){
            cursor = "nwse-resize";
        }else if(name == 'rt' || name == 'lb'){
            cursor = "nesw-resize";
        }else if(name == 't' || name == 'b'){
            cursor = "ns-resize";
        }else{
            cursor = "ew-resize";
        }
        handle.style.cursor = cursor;
        this[handles[i]] = handle;
    }
    this.interaction = new Q.DragSupport(this.parent, this);
}
ResizeBox.prototype = {
    destroy: function(){
        this.interaction.destroy();
    },
    update: function(width, height){
        //重新绘制的画布四方形
        this.wholeBounds = new Q.Rect(0, 0, width, height);
        this._setBounds(this.wholeBounds.clone());
    },
    ondblclick: function(evt){
        if(this._bounds.equals(this.wholeBounds)){
            if(!this.oldBounds){
                this.oldBounds = this.wholeBounds.clone(). grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5);
            }
            this._setBounds(this.oldBounds, true);
            return;
        }
        this._setBounds(this.wholeBounds.clone(), true);
    },
    startdrag: function(evt){
        if(evt.target.type){
            this.dragItem= evt.target;
        }
    },
    ondrag: function(evt){
        if(!this.dragItem){
            return;
        }
        Q.stopEvent(evt);
        var dx = evt.dx;
        var dy = evt.dy;
        if(this.dragItem.type == "border"){
            this._bounds.offset(dx, dy);
            this._setBounds(this._bounds, true);
        }else if(this.dragItem.type == "handle"){
            var name = this.dragItem.name;
            if(name[0] == 'l'){
                this._bounds.x += dx;
                this._bounds.width -= dx;
            }else if(name[0] == 'r'){
                this._bounds.width += dx;
            }
            if(name[name.length - 1] == 't'){
                this._bounds.y += dy;
                this._bounds.height -= dy;
            }else if(name[name.length - 1] == 'b'){
                this._bounds.height += dy;
            }
            this._setBounds(this._bounds, true);
        }

    },
    enddrag: function(evt){
        if(!this.dragItem){
            return;
        }
        this.dragItem = false;
        if(this._bounds.width < 0){
            this._bounds.x += this._bounds.width;
            this._bounds.width = -this._bounds.width;
        }else if(this._bounds.width == 0){
            this._bounds.width = 1;
        }
        if(this._bounds.height < 0){
            this._bounds.y += this._bounds.height;
            this._bounds.height = -this._bounds.height;
        }else if(this._bounds.height == 0){
            this._bounds.height = 1;
        }
        if(this._bounds.width > this.wholeBounds.width){
            this._bounds.width = this.wholeBounds.width;
        }
        if(this._bounds.height > this.wholeBounds.height){
            this._bounds.height = this.wholeBounds.height;
        }
        if(this._bounds.x < 0){
            this._bounds.x = 0;
        }
        if(this._bounds.y < 0){
            this._bounds.y = 0;
        }
        if(this._bounds.right > this.wholeBounds.width){
            this._bounds.x -= this._bounds.right - this.wholeBounds.width;
        }
        if(this._bounds.bottom > this.wholeBounds.height){
            this._bounds.y -= this._bounds.bottom - this.wholeBounds.height;
        }

        this._setBounds(this._bounds, true);
    },
    _createDiv: function(parent){
        var div = document.createElement("div");
        parent.appendChild(div);
        return div;
    },
    _setHandleLocation: function(handle, x, y){
        handle.style.left = (x - this.handleSize / 2) + "px";
        handle.style.top = (y - this.handleSize / 2) + "px";
    },
    _setBounds: function(bounds){
        if(!bounds.equals(this.wholeBounds)){
            this.oldBounds = bounds;
        }
        this._bounds = bounds;
        bounds = bounds.clone();
        bounds.width += 1;
        bounds.height += 1;
        this.boundsDiv.style.left = bounds.x + "px";
        this.boundsDiv.style.top = bounds.y + "px";
        this.boundsDiv.style.width = bounds.width + "px";
        this.boundsDiv.style.height = bounds.height + "px";

        this._setHandleLocation(this.lt, bounds.x, bounds.y);
        this._setHandleLocation(this.t, bounds.cx, bounds.y);
        this._setHandleLocation(this.rt, bounds.right, bounds.y);
        this._setHandleLocation(this.l, bounds.x, bounds.cy);
        this._setHandleLocation(this.r, bounds.right, bounds.cy);
        this._setHandleLocation(this.lb, bounds.x, bounds.bottom);
        this._setHandleLocation(this.b, bounds.cx, bounds.bottom);
        this._setHandleLocation(this.rb, bounds.right, bounds.bottom);
        if(this.onBoundsChange){
            this.onBoundsChange(this._bounds);
        }
    }
}
Object.defineProperties(ResizeBox.prototype, {
    bounds: {
        get: function(){
            return this._bounds;
        },
        set: function(v){
            this._setBounds(v);
        }
    }
});

module.exports = ResizeBox;
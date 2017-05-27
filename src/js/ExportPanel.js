//导出组件封装
function ExportPanel(){
    var scope = this;
    var export_panel = document.getElementById("export_panel");
    export_panel.addEventListener("mousedown", function(evt){
        if(evt.target == export_panel){
            scope.destroy();
        }
    }, false);
    var export_scale = document.getElementById("export_scale");
    var export_scale_label = document.getElementById("export_scale_label");
    export_scale.onchange = function(evt){
        export_scale_label.textContent = scope.scale = export_scale.value;
        scope.updateOutputSize();
    }
    var exportImage = function(print){
        var graph = scope.graph;
        if(!graph){
            return;
        }
        var scale = export_scale.value;
        var s = scope.imageInfo.scale;
        var clipBounds = new Q.Rect(scope.clipBounds.x / s, scope.clipBounds.y / s, scope.clipBounds.width / s, scope.clipBounds.height / s);
        clipBounds.offset(scope.bounds.x, scope.bounds.y);
        var imageInfo = graph.exportImage(scale, clipBounds);

        if (!imageInfo || !imageInfo.data) {
            return false;
        }
        var win = window.open();
        var doc = win.document;
        doc.title = graph.name || "";
//        doc.title = "export image - " + imageInfo.width + " x " + imageInfo.height;
        var img = doc.createElement("img");
        img.src = imageInfo.data;
        doc.body.style.textAlign = "center";
        doc.body.style.margin = "0px";
        doc.body.appendChild(img);

        if(print){
            var style = doc.createElement("style");
            style.setAttribute("type", "text/css");
            style.setAttribute("media", "print");
            var printCSS = "img {max-width: 100%; max-height: 100%;}";
            if(clipBounds.width / clipBounds.height > 1.2){
                printCSS += "\n @page { size: landscape; }";
            }
            style.appendChild(document.createTextNode(printCSS));
            doc.head.appendChild(style);

            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";

            setTimeout(function(){
                win.print();
                win.onfocus=function(){ win.close();}
            }, 100);
        }
    }
    var export_submit = document.getElementById("export_submit");
    export_submit.onclick = function(){
        exportImage();
    }
    var print_submit = document.getElementById("print_submit");
    print_submit.onclick = function(){
        exportImage(true);
    }
}
ExportPanel.prototype = {
    canvas: null,
    initCanvas: function(){
        var export_canvas = document.getElementById('export_canvas');
        export_canvas.innerHTML = "";

        var canvas = document.createElement("canvas");
        export_canvas.appendChild(canvas);
        this.canvas = canvas;

        var export_bounds = document.getElementById("export_bounds");
        var export_size = document.getElementById("export_size");
        var scope = this;
        var clipBounds;
        var drawPreview = function(){
            var canvas = scope.canvas;
            var g = canvas.getContext("2d");
            g.clearRect(0, 0, canvas.width, canvas.height);
            g.drawImage(scope.imageInfo.canvas, 0, 0);
            g.beginPath();
            g.moveTo(0, 0);
            g.lineTo(canvas.width, 0);
            g.lineTo(canvas.width, canvas.height);
            g.lineTo(0, canvas.height);
            g.lineTo(0, 0);

            var x = clipBounds.x, y = clipBounds.y, width = clipBounds.width, height = clipBounds.height;
            g.moveTo(x, y);
            g.lineTo(x, y + height);
            g.lineTo(x + width, y + height);
            g.lineTo(x + width, y);
            g.closePath();
            g.fillStyle = "rgba(0, 0, 0, 0.3)";
            g.fill();
        }
        var onBoundsChange = function(bounds){
            clipBounds = bounds;
            scope.clipBounds = clipBounds;
            drawPreview();
            var w = clipBounds.width / scope.imageInfo.scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale | 0;
            export_bounds.textContent = (clipBounds.x / scope.imageInfo.scale | 0) + ", "
                + (clipBounds.y / scope.imageInfo.scale | 0) + ", " + w + ", " + h;
            scope.updateOutputSize();
        }
        this.updateOutputSize = function(){
            var export_scale = document.getElementById("export_scale");
            var scale = export_scale.value;
            var w = clipBounds.width / scope.imageInfo.scale * scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale  * scale | 0;
            var info = w + " X " + h;
            if(w * h > 3000 * 4000){
                info += "<span style='color: #F66;'>图幅太大，导出时可能出现内存不足</span>";
            }
            export_size.innerHTML = info;
        }
        var resizeHandler = new ResizeBox(canvas.parentNode, onBoundsChange);
        this.update = function(){
            this.canvas.width = this.imageInfo.width;
            this.canvas.height = this.imageInfo.height;
            resizeHandler.update(this.canvas.width, this.canvas.height);
        }
    },
    destroy: function(){
        this.graph = null;
        this.imageInfo = null
        this.clipBounds = null;
        this.bounds = null;
    },
    show: function(graph){
        $('#export_panel').modal("show");

        this.graph = graph;
        var bounds = graph.bounds;
        this.bounds = bounds;

        var canvas_size = document.getElementById("canvas_size");
        canvas_size.textContent = (bounds.width | 0) + " X " + (bounds.height | 0);

        var size = Math.min(500, screen.width / 1.3);
        var imageScale;
        if(bounds.width > bounds.height){
            imageScale = Math.min(1, size / bounds.width);
        }else{
            imageScale = Math.min(1, size / bounds.height);
        }
        this.imageInfo = graph.exportImage(imageScale);
        this.imageInfo.scale = imageScale;

        if(!this.canvas){
            this.initCanvas();
        }
        this.update();
    }
}
var exportPanel;
function showExportPanel(graph){
    if(!exportPanel){
        exportPanel = new ExportPanel();
    }
    exportPanel.show(graph);
}

module.exports ExportPanel
function initTopology(topoNodes, topoRelations) {
    var map = {};
    for (var i = 0; i < topoNodes.length; i++) {
        var node = topoNodes[i];
        var qNode = new Q.Node();
        qNode.name = node.name;
        qNode.location = new Q.Point(node.x, node.y);
        qNode.setStyle(Q.Styles.BORDER, 2)
        qNode.setStyle(Q.Styles.BORDER_COLOR, "#04f99b");
        qNode.setStyle(Q.Styles.PADDING, new Q.Insets(10, 10 ));
        if(node.state == "disabled"){
            qNode.setStyle(Q.Styles.BORDER_COLOR, "#c9302c");
        }
        
        qNode.image = "server.svg";
        graph.graphModel.add(qNode);
        map[node.id] = qNode;
    }
    for (var i = 0; i < topoNodes.length; i++) {
        var node = topoNodes[i];
        var parent = node.parent;
        if (parent) {
            parent = map[parent];
            if (parent) {
                map[node.id].parent = parent;
            }
        }
    }
    for (var i = 0; i < topoRelations.length; i++) {
        var relation = topoRelations[i];
        var nodeFrom = map[relation.from];
        var nodeTo = map[relation.to];
        if (nodeFrom && nodeTo) {
            var edge = graph.createEdge(nodeFrom, nodeTo);
            edge.info = relation;
            edge.setStyle(Q.Styles.EDGE_LINE_DASH, [8, 4, 0.01, 4]);
            edge.setStyle(Q.Styles.LINE_CAP, "round");
            edge.setStyle(Q.Styles.ARROW_TO, Q.Consts.SHAPE_TRIANGLE);
            edge.setStyle(Q.Styles.ARROW_TO_SIZE, {
                width: 16,
                height: 14
            });
            edge.setStyle(Q.Styles.ARROW_TO_STROKE, 1);
            edge.setStyle(Q.Styles.ARROW_TO_STROKE_STYLE, "#000");
            edge.setStyle(Q.Styles.ARROW_TO_FILL_GRADIENT, Q.Gradient.RAINBOW_LINEAR_GRADIENT_VERTICAL);
           // edge.setStyle(Q.Styles.ARROW_FROM, Q.Consts.SHAPE_CIRCLE);
            edge.setStyle(Q.Styles.ARROW_FROM_SIZE, 8);
            edge.setStyle(Q.Styles.EDGE_OUTLINE, 1);
            edge.setStyle(Q.Styles.EDGE_OUTLINE_STYLE, "#0F0");
        }
    }
}


function initDatas() {
    Q.loadJSON("testData.json", function(json) {
        var topoNodes = json.nodes;
        var relations = json.relations;
        initTopology(topoNodes, relations);

        graph.callLater(function() {
            var layouter = new Q.TreeLayouter(graph);
            layouter.doLayout();
            graph.moveToCenter();
        })
    });
}

 //var max = Math.ceil(Math.sqrt(Math.pow(Math.abs(edge.from.x-edge.to.x),2)+Math.pow(Math.abs(edge.from.y-edge.to.y),2)))
function setMoving() {
    var offset = 0;
    setInterval(function() {
        graph.graphModel.forEach(function(node) {
            var edge;
            if (node instanceof Q.Edge) {
                edge = graph.graphModel.getById(node.id);
                edge.setStyle(Q.Styles.EDGE_LINE_DASH_OFFSET, offset);
            }
        });
        offset += -3;
    }, 150)
}


function initGraph() {
    window.graph = new Q.Graph("canvas");
    //方便识别不同节点类型
    Q.Node.prototype.type = "Node";
    Q.Text.prototype.type = "Text";
    Q.Group.prototype.type = "Group";
    Q.Edge.prototype.type = "Edge";

    //注册一个css样式，感觉还不如直接在样式表里增加一个css，有点冗余
    Q.addCSSRule(".maximize", "margin: 0px !important;position: fixed !important;top: 0px;bottom: 0px;right: 0px;left: 0px;z-index: 1030;height: auto !important; width: auto !important;");

    //这里可以给graph增加样式，控制画布的样式
    var styles = {};
    styles[Q.Styles.SELECTION_COLOR] = "#0F0";
    graph.styles = styles;
    //中心位置
    graph.originAtCenter = false;
    //是否可修改
    graph.editable = true;
    //画板的默认缩放比例
    graph.scale = 0.7;
    //注册创建元素时候的生命周期钩子函数
    graph.onElementCreated = function(element, evt) {
            if(element instanceof Q.Node){
                element.setStyle(Q.Styles.BORDER, 2)
                element.setStyle(Q.Styles.BORDER_COLOR, "#04f99b");
                element.setStyle(Q.Styles.PADDING, new Q.Insets(10, 10 ));
            }else if (element instanceof Q.Edge) {
                var v = prompt("连线粗度");
                v = parseInt(v);
                if (v) {
                    element.setStyle(Q.Styles.EDGE_WIDTH, v);
                } else {
                    graph.removeElement(element);
                }
                if (element.edgeType && element.edgeType != Q.Consts.EDGE_TYPE_DEFAULT) {
                    element.setStyle(Q.Styles.EDGE_BUNDLE, false);
                }
                return;
            }else if(element instanceof Q.Text) {
                element.setStyle(Styles.LABEL_BACKGROUND_COLOR, "#2898E0");
                element.setStyle(Styles.LABEL_COLOR, "#FFF");
                element.setStyle(Styles.LABEL_PADDING, new Q.Insets(3, 5));
                return;
            }
        }
        //注册修改元素名称时候的生命周期钩子函数
    graph.onLabelEdit = function(element, label, text, elementUI) {
            if (!text) {
                return false;
            }
            element.name = text;
            //此处调用后台保存
        }
        //监听面板调整大小事件，同步graph大小
 /*   $('#center_panel').panel({
        onResize: function(w, h) {
            graph.updateViewport();
        }
    });*/
    initDatas();
    setMoving();
}

export {
    initGraph
}
var DRAGINFO_PREFIX = "draginfo";

function ondrag(evt) {
    evt = evt || window.event;
    var dataTransfer = evt.dataTransfer;
    var img = evt.target;
    dataTransfer.setData("text", img.getAttribute(DRAGINFO_PREFIX));
}

function createDNDImage(parent, src, title, info) {
    var img = document.createElement("img");
    img.src = src;
    img.setAttribute("draggable", "true");
    img.setAttribute("title", title);
    info = info || {};
    if (!info.image && (!info.type || info.type == "Node")) {
        info.image = src;
    }
    info.label = info.label || title;
    info.title = title;
    img.setAttribute(DRAGINFO_PREFIX, JSON.stringify(info));
    img.ondragstart = ondrag;
    parent.appendChild(img);
    return img;
}


function initCompontents() {
    var toolbox = document.getElementById("components");
    var options = [{
        src: "/images/terminal.svg",
        title: "终端",
        option: {
            type: "Node",
            label: "终端",
            image: "terminal.svg"

        }
    }, {
        src: "/images/exchange.svg",
        title: "交换机",
        option: {
            type: "Node",
            label: "交换机",
            image: "exchange.svg"

        }
    }, {
        src: "/images/server.svg",
        title: "服务器",
        option: {
            type: "Node",
            label: "服务器",
            image: "server.svg"

        }
    }, {
        src: "/images/switch.svg",
        title: "开关",
        option: {
            type: "Node",
            label: "开关",
            image: "switch.svg"

        }
    }]
    options.forEach(function(data){
        createDNDImage(toolbox,data.src,data.title,data.option);

    });
    /*createDNDImage(toolbox, "/images/terminal.svg", "终端", {
        type: "Node",
        label: "终端",
        image: "terminal.svg"
    });
    createDNDImage(toolbox, "/images/exchange.svg", "交换机", {
        type: "Node",
        label: "交换机",
        image: "exchange.svg"
    });
    createDNDImage(toolbox, "/images/server.svg", "服务器", {
        type: "Node",
        label: "服务器",
        image: "server.svg"
    });
    createDNDImage(toolbox, "/images/switch.svg", "开关", {
        type: "Node",
        label: "开关",
        image: "switch.svg"
    });*/
}

export {
    initCompontents
};
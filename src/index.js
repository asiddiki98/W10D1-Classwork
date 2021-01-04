const DOMNodeCollection = require("./dom_node_collection.js")

window.$l = $l

function $l(arg){
    // switch (arg){
    //     case arg instanceof String :
            debugger;
            let nodeList = document.querySelectorAll(arg);
            debugger
            const array = Array.from(nodeList)
            debugger
            return array
            // break;

    // }
}
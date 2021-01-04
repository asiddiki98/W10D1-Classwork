const DOMNodeCollection = require("./dom_node_collection.js")

window.$l = $l

// let el = document.getElementById("headerId")

function $l(arg){
    if (arg instanceof HTMLElement) {
        debugger;
        const html = new DOMNodeCollection([arg]);
        return html;
    } else if (typeof arg === "string") {
        debugger;
        let cssNode = document.querySelectorAll(arg);
        const cssArray = Array.from(cssNode);
        // return cssArray;
        const css = new DOMNodeCollection(cssArray);
        return css;
    }           
}
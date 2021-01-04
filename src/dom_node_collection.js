class DOMNodeCollection{
    constructor(array){
        this.nodes = array;
    }

    html(str) {
        if (str !== 'undefined') {
            this.nodes.map(node => node.innerHTML = str);  
        } else {
            return this.nodes[0].innerHTML;
        }
    }

    empty() {
        this.html('');
    }

    append(arg) {
        if (arg instanceof DOMNodeCollection) {
            this.html(`${arg.outerHTML}`);
        } else if (typeof arg === "string") {
            this.html(arg);
        }     
    }



}

module.exports = DOMNodeCollection;
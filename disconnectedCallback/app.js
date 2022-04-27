class MyCostumElement extends HTMLElement {
    constructor() {
        super();
        console.log("constructor");
    }
    connectedCallback() {
        console.log("connectedCallback");
    }
    disconnectedCallback() {
        console.log("disconnectedCallback");
    }
}
customElements.define("my-costum-element", MyCostumElement);

document.querySelector("my-costum-element").remove();
class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <secction>
                <h1>
                    <slot name="title"></slot>
                </h1>
                <p>
                    <slot name="parrafo"></slot>
                </p>
                <slot></slot>
            </secction>

            ${this.getStyle()}
        
        `;
        return template;
    }
    getStyle(){
        return `
            <style>
                ::slotted(span) {
                    font-size: 30px;
                    color: #00bcd4;
                }

                ::slotted(.text){
                    color: #ff9800;
                }
            </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }

}
customElements.define("my-element", myElement);
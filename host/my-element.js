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
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-zise: 20px;
                    background: #f5f5f7;
                    border-radius: 25px;
                }

                :host(.blue) {
                    background: #00bcd4;
                }
                

                :host([yellow]){
                    background: #ffeb3b;
                }

                :host-context(article.card) {
                    display: block;
                    max-width: 100%;
                    
                }
                :host-context(article.card) article {
                    text-align: center;
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
class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>
                    <slot name="title"></slot>
                </h1>
                <p>
                    <slot name="parrafo"></slot>
                </p>
                <slot></slot>
            </section>

            ${this.getStyle()}
        
        `;
        return template;
    }
    getStyle(){
        return `
            <style>

            :host{
                --primary-color: #00bcd4;
                --secondary-color: #ff9800;
                --heading-primary: 30px;
                --heading-secondary: 20px;
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 500px;
            }
                section{
                    background: var(--primary-color);
                    
                }
                p {
                    background: var(--secondary-color);
                    font-size: var(--heading-secondary);
                }
                h1{
                    font-size: var(--heading-primary);
                    color
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
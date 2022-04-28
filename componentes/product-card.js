class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
             <main>
                <secction>
                    <img />
                </secction>
                <secction>
                    <div>
                        <h2>Hola mundo</h2>
                        <p></p>
                        <h3></h3>
                        <button>Comprar</button>
                    </div>
                </secction>   
             </main>
        `;
        return template;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        // this.shadowRoot.querySelector('img').src = this.getAttribute('img');
        // this.shadowRoot.querySelector('h2').innerHTML = this.getAttribute('name');
        // this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('description');
        // this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('price');
        // this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('button');
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('product-card', productCard);

export default productCard;
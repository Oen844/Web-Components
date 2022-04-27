class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.title = this.getAttribute('title');
    this.parrafo = this.getAttribute('parrafo');
    this.img = this.getAttribute('img');
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>
          ${this.title}
        </h2>
        <div>
        <p>
          ${this.parrafo}
        </p>
        <img src="${this.img}" alt="Una imagen de webcomponents">
        </div>
        
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles(){
    return `
      <style>
        h2 {
          color: red;
          text-align: center;
        }
        p {
          weight: bold;
          color: blue;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);

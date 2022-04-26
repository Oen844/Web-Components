class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>Hello World</h2>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ex. Dolorem sunt nesciunt, minus harum nulla temporibus totam fuga sequi dolores esse! Quod modi consequuntur obcaecati voluptate. Nemo, optio saepe?</p>
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

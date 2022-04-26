const template = document.createElement("div");
template.innerHTML = `
<style> 
    p{
        color: blue;
    }
    .texto {
        text-align: center;
        font-size: 20px;
        color: red;
    }
</style>
    <p class="texto">Hello World 2</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ex. Dolorem sunt nesciunt, minus harum nulla temporibus totam fuga sequi dolores esse! Quod modi consequuntur obcaecati voluptate. Nemo, optio saepe?</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }
  connectedCallback() {
    this.p.textContent = "Hello World";

    this.appendChild(this.p);
    this.appendChild(template);    
  }
}

customElements.define("my-element", myElement);

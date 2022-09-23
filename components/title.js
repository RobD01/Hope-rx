class Title extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        
        <title>Hope Rx Pharmacy</title>
`;
  }
}

customElements.define("my-title", Title);

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        
      <li><a href="index.html">Home</a></li>    
      <li><a href="services.html">Services</a></li> 
      <li><a href="contact.html">Contact</a></li>
`;
  }
}

customElements.define("my-navbar", Navbar);

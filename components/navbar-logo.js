class NavbarLogo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        
        <div class="navbar-brand">
          <a href="index.html">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKGl0C_b8b1TY4tguXQPIV9hoBujo2x21ww&usqp=CAU"
              alt="logo"
            />
          </a>
        </div>
`;
  }
}

customElements.define("navbar-logo", NavbarLogo);

class NavbarRight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        
        <a
            href="https://goo.gl/maps/yVrQfXVVBu9SUyH88"
            class="btn btn-dark-outline"
            target="_blank"
            >Navigate to Store</a
          >

          <a href="tel:7144626333" class="btn btn-dark-outline" target="_blank">
            Call Now
          </a>
`;
  }
}

customElements.define("navbar-right", NavbarRight);

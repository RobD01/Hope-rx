class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-container">
        <div class="social">
          <a href="https://instagram.com/xuanloanfabrics" target="_blank"
            ><img
              src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
              alt="Instagram"
          /></a>
        </div>
        <p class="text-center">
          Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>
          . All rights Reserved
        </p>
      </div>
    </footer>
`;
  }
}

customElements.define("my-footer", Footer);

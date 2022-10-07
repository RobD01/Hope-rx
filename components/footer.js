class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    
    <footer class="footer">
      <div class="footer-container">
        <div class="social">
          
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

class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Alexis Hernández Toxqui.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
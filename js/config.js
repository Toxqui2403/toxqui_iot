import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          home
        </span>
        Inicio
      </a>
      <a href="indexIoT.html">
        <span
          class="material-icons">
          description
        </span>
        Simulación IoT
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
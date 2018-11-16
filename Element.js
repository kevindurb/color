import { h } from './h.js';

export class Element extends HTMLElement {
  static toString() {
    return `x-${this.name}`.toLowerCase();
  }

  static define() {
    customElements.define(this, this);
  }

  constructor(...args) {
    super(...args);
    const name = this.constructor.name;
    this.attachShadow({ mode: 'open' });

    const styles = this.styles();
    if (styles) {
      this.shadowRoot.appendChild(h('style', styles));
    }

    const content = this.render();
    if (content) {
      this.shadowRoot.appendChild(content);
    }
  }

  $(...args) {
    return this.shadowRoot.querySelector(...args);
  }

  $$(...args) {
    return this.shadowRoot.querySelectorAll(...args);
  }

  styles() { return null; }
  render() { return null; }
}

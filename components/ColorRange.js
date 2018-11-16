import { Element } from '../Element.js';
import { h } from '../h.js';
import {
  setValue,
  onChange,
} from '../utils/dom.js';

export class ColorRange extends Element {
  static get observedAttributes() {
    return [
      'value'
    ];
  }

  connectedCallback() {
    this.range = this.$('#range');
  }

  attributeChangedCallback(name, old, value) {
    setValue(this.getAttribute('value'), this.range);
  }

  render() {
    const label = this.getAttribute('label');
    const min = this.getAttribute('min');
    const max = this.getAttribute('max');
    const value = this.getAttribute('value');

    console.log(label, min, max);

    return h('div', [
      h('label', label),
      h('input', { id: 'range', type: 'range', min, max, value })
    ]);
  }
}

ColorRange.define();

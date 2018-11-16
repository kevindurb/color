import { Element } from '../Element.js';
import { h } from '../h.js';
import {
  decToHex,
  hexToDec,
  hexColorToParts,
  hexPartsToColor,
  RGB2CMY,
  CMY2RGB,
} from '../utils/color.js';
import {
  getValue,
  setValue,
  onChange,
} from '../utils/dom.js';
import { ColorRange } from './ColorRange.js';

export class ColorPicker extends Element {
  constructor() {
    super();

    this.handleCMYChange = this.handleCMYChange.bind(this);
    this.handleRGBChange = this.handleRGBChange.bind(this);
    this.handleSampleChange = this.handleSampleChange.bind(this);
  }

  connectedCallback() {
    this.colorSample = this.$('#color-sample');
    this.redRange = this.$('#red-range');
    this.greenRange = this.$('#green-range');
    this.blueRange = this.$('#blue-range');
    this.cyanRange = this.$('#cyan-range');
    this.magentaRange = this.$('#magenta-range');
    this.yellowRange = this.$('#yellow-range');

    this.setupEvents();
    this.handleRGBChange();
  }

  setupEvents() {
    onChange(this.handleRGBChange, this.redRange);
    onChange(this.handleRGBChange, this.greenRange);
    onChange(this.handleRGBChange, this.blueRange);

    onChange(this.handleCMYChange, this.cyanRange);
    onChange(this.handleCMYChange, this.magentaRange);
    onChange(this.handleCMYChange, this.yellowRange);

    onChange(this.handleSampleChange, this.colorSample);
  }

  handleRGBChange() {
    const red = getValue(this.redRange);
    const green = getValue(this.greenRange);
    const blue = getValue(this.blueRange);

    const cmy = RGB2CMY(red, green, blue);

    setValue(cmy.c, this.cyanRange);
    setValue(cmy.m, this.magentaRange);
    setValue(cmy.y, this.yellowRange);

    this.updateSample();
  }

  handleCMYChange() {
    const cyan = getValue(this.cyanRange);
    const magenta = getValue(this.magentaRange);
    const yellow = getValue(this.yellowRange);

    const rgb = CMY2RGB(cyan, magenta, yellow);

    setValue(rgb.r, this.redRange);
    setValue(rgb.g, this.greenRange);
    setValue(rgb.b, this.blueRange);

    this.updateSample();
  }

  updateSample() {
    const red = decToHex(getValue(this.redRange));
    const green = decToHex(getValue(this.greenRange));
    const blue = decToHex(getValue(this.blueRange));

    setValue(hexPartsToColor(red, green, blue), this.colorSample);
  }

  handleSampleChange() {
    const [
      red,
      green,
      blue,
    ] = hexColorToParts(getValue(this.colorSample));

    setValue(hexToDec(red), this.redRange);
    setValue(hexToDec(green), this.greenRange);
    setValue(hexToDec(blue), this.blueRange);

    this.handleRGBChange();
  }

  styles() {
    return `
      #color-sample {
        width: 200px;
        height: 200px;
      }
    `;
  }

  render() {
    return h('div',
      { id: 'root' },
      [
        h('input', { type: 'color', id: 'color-sample' }),
        h('div', [
          h('h2', 'RGB'),
          h(ColorRange, {
            label: 'Red',
            id: 'red-range',
            min: 0,
            max: 255,
          }),
          h('div', [
            h('label', 'Green'),
            h('input', { id: 'green-range', type: 'range', min: 0, max: 255 })
          ]),
          h('div', [
            h('label', 'Blue'),
            h('input', { id: 'blue-range', type: 'range', min: 0, max: 255 })
          ]),
        ]),
        h('div', [
          h('h2', 'CMY'),
          h('div', [
            h('label', 'Cyan'),
            h('input', { id: 'cyan-range', type: 'range', min: 0, max: 1, step: 0.01 })
          ]),
          h('div', [
            h('label', 'Magenta'),
            h('input', { id: 'magenta-range', type: 'range', min: 0, max: 1, step: 0.01 })
          ]),
          h('div', [
            h('label', 'Yellow'),
            h('input', { id: 'yellow-range', type: 'range', min: 0, max: 1, step: 0.01 })
          ]),
        ])
      ]
    );
  }
}

ColorPicker.define();

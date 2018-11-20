import {
  hexToDec,
  hexColorToParts,
  RGB2CMY,
} from '/utils/color.js';
import ColorRange from './ColorRange.js';

export default class CMYPicker extends Component {
  render({ value }) {
    const color = hexColorToParts(value);
    const r = hexToDec(color[0]);
    const g = hexToDec(color[1]);
    const b = hexToDec(color[2]);

    const { c, m, y } = RGB2CMY(r, g, b);

    return (
      h('div', {}, [
        h(ColorRange, { type: 'CMY', value: c }),
        h(ColorRange, { type: 'CMY', value: m }),
        h(ColorRange, { type: 'CMY', value: y }),
      ])
    );
  }
}

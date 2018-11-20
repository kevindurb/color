import {
  hexToDec,
  hexColorToParts,
} from '/utils/color.js';
import ColorRange from './ColorRange.js';

export default class RGBPicker extends Component {
  render({ value }) {
    const color = hexColorToParts(value);
    const r = hexToDec(color[0]);
    const g = hexToDec(color[1]);
    const b = hexToDec(color[2]);

    return (
      h('div', {}, [
        h(ColorRange, { type: 'RGB', value: r }),
        h(ColorRange, { type: 'RGB', value: g }),
        h(ColorRange, { type: 'RGB', value: b }),
      ])
    );
  }
}

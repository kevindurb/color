const TYPE_PROPS = {
  'RGB': { min: 0, max: 255, step: 1 },
  'CMY': { min: 0, max: 1, step: 0.01 },
};

export default class ColorRange extends Component {
  render({ value, type }) {

    return (
      h('input', {
        ...TYPE_PROPS[type],
        type: 'range',
        value: value,
      })
    );
  }
}

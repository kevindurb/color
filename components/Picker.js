import RGBPicker from './RGBPicker.js';
import CMYPicker from './CMYPicker.js';
import withStyles from '/withStyles.js';

const styles = {
};

export default withStyles(styles)(class Picker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#6852af',
    };
  }

  render(props, { color }) {
    return (
      h('div', {}, [
        h('input', { type: 'color', value: color }),
        h(RGBPicker, { value: color }),
        h(CMYPicker, { value: color })
      ])
    );
  }
})

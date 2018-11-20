const instance = jss.create();

export default (styles) => (Component) => {
  const styleSheet = instance.createStyleSheet(styles);
  return class WithStyles extends Component {
    componentDidMount() {
      styleSheet.attach();
    }

    componentWillUnmount() {
      styleSheet.detach();
    }

    render(props) {
      return h(Component, {...props, styleSheet});
    }
  }
}

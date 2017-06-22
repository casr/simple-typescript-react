const {Component, createElement} = require('react')
const {render} = require('react-dom')

interface IProps {
  person?: string;
}

class MyComponent extends Component<IProps, {}> {
  render() {
    return <h1>Hello {this.props.person || 'world'}!</h1>
  }
}

render(
  createElement(MyComponent, {person: 'Chris'}),
  document.getElementById('app')
)

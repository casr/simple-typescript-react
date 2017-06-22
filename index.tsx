const {Component} = require('react')
const ReactDOM = require('react-dom')

interface IProps {
  person?: string;
}

class MyComponent extends Component<IProps, {}> {
  render() {
    return <h1>Hello {this.props.person || 'world'}!</h1>
  }
}

ReactDOM.render(<MyComponent person="Chris" />, document.getElementById('app'))

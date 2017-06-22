import * as React from 'react'

interface IProps {
  person?: string;
}

export default class Greeter extends React.Component<IProps, {}> {
  render() {
    return <h1>Hello {this.props.person || 'world'}!</h1>
  }
}

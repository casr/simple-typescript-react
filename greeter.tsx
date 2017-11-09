import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { CountAction, decrementCount, incrementCount } from './actions'
import { IStoreState } from './types'

interface IOwnProps extends RouteComponentProps<{}> {
  person?: string
}

interface IStateProps {
  person: string
}

interface IDispatchProps {
  onIncrement: () => void
  onDecrement: () => void
}

type GreeterProps = IOwnProps & IStateProps & IDispatchProps

class Greeter extends React.Component<GreeterProps, {}> {
  render () {
    return <div>
      <h1>Hello {this.props.person || 'world'}!</h1>
      <button onClick={this.props.onIncrement}>Increment</button>
      <button onClick={this.props.onDecrement}>Decrement</button>
    </div>
  }
}

function mapStateToProps ({count}: IStoreState) {
  return {
    person: `beep boop ${count}`
  }
}

function mapDispatchToProps (dispatch: Dispatch<CountAction>) {
  return {
    onDecrement: () => dispatch(decrementCount()),
    onIncrement: () => dispatch(incrementCount())
  }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(Greeter)

import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import { StoreState } from './types'
import { CountAction, incrementCount, decrementCount } from './actions'

interface OwnProps {
  person?: string
}

interface StateProps {
  person: string
}

interface DispatchProps {
  onIncrement: () => void
  onDecrement: () => void
}

type GreeterProps = OwnProps & StateProps & DispatchProps

class Greeter extends React.Component<GreeterProps, {}> {
  render () {
    return <div>
      <h1>Hello {this.props.person || 'world'}!</h1>
      <button onClick={this.props.onIncrement}>Increment</button>
      <button onClick={this.props.onDecrement}>Decrement</button>
    </div>
  }
}

function mapStateToProps ({count}: StoreState) {
  return {
    person: `beep boop ${count}`
  }
}

function mapDispatchToProps (dispatch: Dispatch<CountAction>) {
  return {
    onIncrement: () => dispatch(incrementCount()),
    onDecrement: () => dispatch(decrementCount())
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Greeter)

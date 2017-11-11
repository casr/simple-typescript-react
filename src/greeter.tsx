import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { asyncChangeCount, changeCount, Store } from './ducks'

interface IOwnProps extends RouteComponentProps<{}> {
  person?: string
}

interface IStateProps {
  person: string
}

interface IDispatchProps {
  actions: {
    increment: () => void
    decrement: () => void
    asyncDecrement: () => void
    asyncIncrement: () => void
  }
}

type GreeterProps = IOwnProps & IStateProps & IDispatchProps

class Greeter extends React.Component<GreeterProps, {}> {
  render () {
    const { actions, person } = this.props

    return <div>
      <h1>Hello {person || 'world'}!</h1>
      <button onClick={actions.increment}>Increment</button>
      <button onClick={actions.decrement}>Decrement</button>
      <button onClick={actions.asyncIncrement}>Async Increment</button>
      <button onClick={actions.asyncDecrement}>Async Decrement</button>
    </div>
  }
}

function mapStateToProps ({amount}: Store) {
  return {
    person: `beep boop ${amount}`
  }
}

function mapDispatchToProps (dispatch: Dispatch<Store>) {
  return {
    actions: bindActionCreators({
      asyncDecrement: () => asyncChangeCount(-1),
      asyncIncrement: () => asyncChangeCount(1),
      decrement: () => changeCount(-1),
      increment: () => changeCount(1)
    }, dispatch)
  }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(Greeter)

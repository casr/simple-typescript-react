import {CountAction, INCREMENT_COUNT, DECREMENT_COUNT} from './actions'
import {StoreState} from './types'

export function numberReducer(state: StoreState, action: CountAction): StoreState {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {count: state.count + 1}
    case DECREMENT_COUNT:
      return {count: state.count - 1}
    default:
      return state
  }
}

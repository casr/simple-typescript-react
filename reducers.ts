import {  CountAction,  DECREMENT_COUNT,  INCREMENT_COUNT} from './actions'
import { IStoreState } from './types'

export function numberReducer (state: IStoreState, action: CountAction): IStoreState {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {count: state.count + 1}
    case DECREMENT_COUNT:
      return {count: state.count - 1}
    default:
      return state
  }
}

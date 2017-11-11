import { ThunkAction as ReduxThunkAction } from 'redux-thunk'

// Action types
export const enum actionTypes {
  changeCount = 'simple-typescript-react/count/CHANGE_COUNT'
}

interface OtherAction {
  type: '__OTHER_ACTION__'
}

interface ChangeCountAction {
  type: actionTypes.changeCount,
  payload: { amount: number }
}

export type Action = OtherAction | ChangeCountAction

type ThunkAction = ReduxThunkAction<void, Store, {}>

// Reducer
export interface Store {
  amount: number
}
const initialState: Store = { amount: 0 }
export default function reducer (
  previousState: Store = initialState,
  action: Action
): Store {
  switch (action.type) {
    case actionTypes.changeCount:
      return {
        ...previousState,
        amount: previousState.amount + action.payload.amount
      }
    default:
      return previousState
  }
}

// Action creators
export function changeCount (amount: number): Action {
  return {
    payload: { amount },
    type: actionTypes.changeCount
  }
}

// Side effects
export function asyncChangeCount (amount: number): ThunkAction {
  return dispatch => {
    setTimeout(() => dispatch(changeCount(amount)), 1000)
  }
}

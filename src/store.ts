import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import {
  default as numberReducer,
  Store
} from './ducks'

const store = createStore<Store>(
  numberReducer,
  {amount: 0},
  applyMiddleware(
    thunk
  )
)

export default store

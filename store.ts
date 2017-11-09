import { createStore } from 'redux'
import { numberReducer } from './reducers'
import { IStoreState } from './types'

const store = createStore<IStoreState>(numberReducer, {count: 0})

export default store

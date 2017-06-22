import {createStore} from 'redux'
import {numberReducer} from './reducers'
import {StoreState} from './types'

const store = createStore<StoreState>(numberReducer, {count: 0})

export default store

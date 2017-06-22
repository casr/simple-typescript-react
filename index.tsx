import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Greeter from './greeter'
import store from './store'

render(
  <Provider store={store}>
    <Greeter />
  </Provider>,
  document.getElementById('app')
)

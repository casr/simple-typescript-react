import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Greeter from './greeter'
import store from './store'

render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Greeting</Link></li>
        </ul>

        <hr/>

        <Route exact path='/' component={Greeter}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)

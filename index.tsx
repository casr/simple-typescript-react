import * as React from 'react'
import {render} from 'react-dom'
import Greeter from './greeter'

render(
  <Greeter person="Chris" />,
  document.getElementById('app')
)

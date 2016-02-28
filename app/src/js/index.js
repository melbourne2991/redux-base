import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Ui } from './components'
import configureStore from './configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Ui/>
  </Provider>, 
  document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
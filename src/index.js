import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Ui } from './components'
import configureStore from './configureStore'

const store = configureStore()
const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
  <Provider store={store}>
    <Ui/>
  </Provider>, 
  mountPoint)

if (module.hot) {
  module.hot.accept();
}
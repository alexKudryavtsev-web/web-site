import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './globalStyle.css'
import 'antd/dist/antd.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    form: reducer
  }),
  composeWithDevTools()
)

const app = <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>

ReactDOM.render(
  app,
  document.getElementById('root')
)

reportWebVitals()

import './main.css'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {ConnectedRouter, routerMiddleware} from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import createRootReducer from './reducers'
import Layout from './containers/Layout/index'

const history = createBrowserHistory()
// все наши ф-ции между экшином и редьюсером
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
  createRootReducer(history),
  // прослойка для редакса (действия между диспатчем экшина и обработкой в редьюсере), thunk - для асинхронщины
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


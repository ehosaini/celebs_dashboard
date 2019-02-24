import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import Reducers from './reducers'

// Setup for Redux browser dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Redux store and middleware setup
const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(thunk))
)

// Add routing
const RoutedApp = () => {
  return (
    <div>
      <BrowserRouter >
        <div>
          <Route path='/' exact component={App} />
          <Route path='/:id' exact component={App} />
        </div>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <RoutedApp />
  </Provider>
  , document.querySelector('#root'))

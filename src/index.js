import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import reducers from './reducers'
import * as serviceWorker from './serviceWorker'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={createStore(reducers, composeWithDevTools())}>
    <App />
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

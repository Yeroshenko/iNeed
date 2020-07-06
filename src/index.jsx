import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from 'redux/store'
import App from 'App'
import 'styles/index.sass'
import * as serviceWorker from 'serviceWorker'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)

serviceWorker.register()

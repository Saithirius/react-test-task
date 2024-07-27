import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {persistor, store} from './store'
import {Provider} from 'react-redux'

import App from './App'

import './styles/index.css'
import {PersistGate} from 'redux-persist/integration/react'

const rootView = document.getElementById('root')

if (rootView) {
  const root = createRoot(rootView)
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App/>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

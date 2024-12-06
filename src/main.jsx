import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './pizzaSlice'

const store = configureStore({reducer})

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)


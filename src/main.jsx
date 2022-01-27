import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './config/i18next-config'
import App from './App'
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)

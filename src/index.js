import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App/App'
import { BrowserRouter } from "react-router-dom"

const router = (
  <BrowserRoute>
    <App />
  </BrowserRoute>
);

ReactDOM.render(
    router,
  document.getElementById('root')
)

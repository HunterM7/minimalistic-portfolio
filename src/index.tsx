import React from 'react'
import ReactDOM from 'react-dom/client'

// Files & Data
import 'scss/index.scss'

// Components
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

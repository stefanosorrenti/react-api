import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as bootstrap from 'bootstrap'
// Supports weights 400-700
import '@fontsource-variable/libre-baskerville'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

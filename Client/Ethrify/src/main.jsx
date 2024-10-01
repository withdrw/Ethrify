import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PaymentProvider } from './context/PaymentContext.jsx'
createRoot(document.getElementById('root')).render(
  <PaymentProvider>
    <App />
  </PaymentProvider>
)

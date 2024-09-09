import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TransactionProvider } from './context/TransactionContext.jsx'
createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
)

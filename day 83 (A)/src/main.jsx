import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { MyCounterContextProvider } from './utility/CounterContext.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <MyCounterContextProvider>

    <App />
    
  </MyCounterContextProvider>

  </BrowserRouter>
 
)

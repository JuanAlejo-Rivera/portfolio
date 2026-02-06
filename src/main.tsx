import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@n8n/chat/style.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './config/i18n'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

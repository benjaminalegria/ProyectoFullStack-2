import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import './index.css'
import App from './App.jsx'
>>>>>>> 0f880cc1567baff4ff9bba88684ea2bd04a5fd3a

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
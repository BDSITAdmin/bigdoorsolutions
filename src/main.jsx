import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home  from './Home.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
  </StrictMode>,
)

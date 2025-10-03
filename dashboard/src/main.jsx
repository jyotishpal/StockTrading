import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
  <Routes>
    <Route path="*" element={<Home/>}></Route>
  </Routes>
   </HashRouter>
  </StrictMode>,
)

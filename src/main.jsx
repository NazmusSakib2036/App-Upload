import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './pages/header'
import Write_review from './pages/write_review'
import Write_show from './pages/write_show' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Write_review/>
    <Write_show/>
  </StrictMode>,
)

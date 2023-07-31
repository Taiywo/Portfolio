import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'

import './App.css'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Navbar from "./components/Navbar"


function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App




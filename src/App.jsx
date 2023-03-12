import React from 'react'
import LandingPage from "./components/landing-page/LandingPage"
import Nav from "./components/Nav/Nav"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contacts/Contacts"
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
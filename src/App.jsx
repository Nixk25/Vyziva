import React from 'react'
import LandingPage from "./components/landing-page/LandingPage"
import Nav from "./components/Nav/Nav"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contacts/Contacts"


const App = () => {
  return (
    <>
      <LandingPage/>
      <Nav/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
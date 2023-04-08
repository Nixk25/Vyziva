import React from 'react'
import LandingPage from '../landing-page/LandingPage'
import About from '../about/About'
import Services from '../services/Services'
import Nav from '../Nav/Nav'
import Portfolio from '../portfolio/Portfolio'
import Contacts from '../contacts/Contacts'

const Main = () => {
  return (
    <>
    <Nav/>
    <LandingPage/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contacts/>
    </>
  )
}

export default Main
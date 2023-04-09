import React from 'react'
import LandingPage from '../landing-page/LandingPage'
import About from '../about/About'
import Services from '../services/Services'
import Nav from '../Nav/Nav'
import Portfolio from '../portfolio/Portfolio'
import Contacts from '../contacts/Contacts'
import Shop from '../Shop/Shop'



const Main = () => {
  return (
    <>
    <Nav/>
    <LandingPage/>
    <About/>
    <Services/>
    <Portfolio/>
    <Shop/>
    <Contacts/>
    </>
  )
}

export default Main
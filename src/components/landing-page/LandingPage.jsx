import React from 'react'
import "./LandingPage.css"
import image from "../../assets/Logo.png"
import "animate.css"

const LandingPage = () => {
  return (
    <section id='home'>
      <div className="container">
        <div className="main-wrapper">
          <h3 className='secondary-text'>
            Vítejte na mých stránkách
          </h3>
          <h1 className='main-text animate__animated animate__zoomIn'>
            Nutričního poradenství Lucie
          </h1>
          <div className="main-logo animate__animated animate__zoomIn animate__delay-1s">
            <img className='logo' src={image} alt="logo výživa Lucie" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
import React from 'react'
import "./LandingPage.css"
import image from "../../assets/Logo.png"


const LandingPage = () => {
  return (
    <section>
      <div className="container">
        <div className="main-wrapper">
          <h1 className='main-text'>
            N <span>u</span>t <span>r</span>i <span>č</span>n <span>í</span>&nbsp; p<span>o</span> r <span> a</span> d <span> e</span> n <span>s</span> t <span> v</span>í &nbsp; Lucie
          </h1>
          <div className="main-logo">
            <img className='logo' src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
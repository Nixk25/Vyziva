import React from 'react'
import "./Portfolio.css"
import Petr from '../modals/Petr-K./Petr'
import { useState } from 'react'


const Portfolio = () => {
  const[show, setShow] = useState(false)



  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio-wrapper">
          <div className="portfolio-headline">
            <h1 className='headline'>Moje <br /><span className='headline-bigger'>Portfolio</span></h1>
          </div>
          <div className="portfolio-projects">
            <div className="project" onClick={() => setShow(true)}>
              <div className="project-text">
                <h1 className='project-name'>
                  Petr K.
                </h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci deserunt aliquam voluptas est corrupti vitae natus sit inventore. Iusto, accusamus?
                </p>  
              </div>
              <Petr onClose={() => setShow(false)} show={show} />
            </div>
            <div className="project">
              <div className="project-text">
                <h1 className='project-name'>
                  Iveta K.
                </h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, adipisci consectetur vel optio fuga aperiam nesciunt alias unde possimus eius?
                </p>
              </div>
            </div>
            <div className="project">
              <div className="project-text">
                <h1 className='project-name'>
                  Milan B.
                </h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore inventore accusamus libero officia quasi id facilis ducimus, nesciunt autem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
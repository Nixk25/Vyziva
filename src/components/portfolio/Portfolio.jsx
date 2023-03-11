import React from 'react'
import "./Portfolio.css"
import Petr from '../modals/Petr-K./Petr'
import { useState } from 'react'
import Iveta from '../modals/Iveta-K./Iveta'
import Milan from '../modals/Milan-B./Milan'



const Portfolio = () => {
  const[show, setShow] = useState(false)
  const [view, setView] = useState(false)
  const [out, setOut] = useState(false)



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
                Pan Petr přišel se skromným přáním shodit pár kil, zlepšit svůj jídelníček a do budoucna předejít případným zdravotním problémům. Ačkoliv ho vůbec nic netrápilo tak neměl absolutně problém změnit svůj jídelníček, a to od základu a nově nastavený jídelní režim si přivlastnil a stal se jeho novým životním stylem. A to celé bez hladu a trápení :-) Výchozí váha 29/9/2021 - <b>111,6kg</b>, současná váha - <b>89kg</b>   
                </p>  
              </div>
              <Petr petrClose={() => setShow(false)} show={show} />
            </div>
            <div className="project" onClick={() => setView(true)}>
              <div className="project-text">
                <h1 className='project-name'>
                  Iveta K.
                </h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, adipisci consectetur vel optio fuga aperiam nesciunt alias unde possimus eius?
                </p>
              </div>
              <Iveta ivetaClose={()=> setView(false)} view={view} />
            </div>
            <div className="project" onClick={() => setOut(true)}>
              <div className="project-text">
                <h1 className='project-name'>
                  Milan B.
                </h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore inventore accusamus libero officia quasi id facilis ducimus, nesciunt autem!
                </p>
              </div>
              <Milan milanClose={() => setOut(false)} out={out}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
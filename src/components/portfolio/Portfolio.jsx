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
    <section id="portfolio" className='portfolio'>
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
                Pan Petr přišel se skromným přáním shodit pár kil, zlepšit svůj jídelníček a do budoucna předejít případným zdravotním problémům. Ačkoliv ho vůbec nic netrápilo tak neměl absolutně problém změnit svůj jídelníček, a to od základu a nově nastavený jídelní režim si přivlastnil a stal se jeho novým životním stylem. A to celé bez hladu a trápení :-) Výchozí váha 29/9/2021 - <b>111,6kg</b>, současná váha -<b>89kg</b>   
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
                Velice příjemná spolupráce, požadavek byl jasný, zhubnout a vypadat dobře. A to se rozhodně povedlo. V žádném případě progres nekončí, zapracovaly jsme společně nejen na změně životního stylu co se stravování týče, ale i na pravidelném pohybu, který je opravdu nutný, pokud chcete zůstat nejen zdraví, ale i ve formě současná váha <b>-20kg</b>
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
                Milan jako všichni hubnoucí, chtěl nejen dát dolů přebytečná kila, ale i zbavit se některých nepříjemných zdravotních komplikací, které s sebou vyšší váha přináší. Neskutečná proměna, neskutečná houževnatost a sebedisciplína, bez které by se toto opravdu neobešlo <b>-40kg</b>
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
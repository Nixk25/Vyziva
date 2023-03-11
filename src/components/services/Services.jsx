import React from 'react'
import "./Services.css"


const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services-wrapper">
            <div className="services-headline">
              <h1 className='headline'>Co nabízím za <br /> <span className='headline-bigger'>Služby</span> </h1>
            </div>
            <div className="services-items__wrapper">
              
              <div className="services-item">
                <h4 className="services-item__headline">Úvodní osobní konzultace</h4>
                <p className="services-item__descryption">Osobní rozhovor,  při kterém  probereme dosavadní životní styl, současný jídelníček a povíme si něco o Vašich možnostech, zaměření kterým se chcete ubírat, samozřejmě  vše bude o jídle,  jak se po něm cítíte a jaký máte cil.</p>
                <a href="#contact"><button className="services-item__button">Mám zájem</button></a>
              </div>
             
             
              <div className="services-item">
                <h4 className="services-item__headline">Základní tělesná analýza</h4>
                <p className="services-item__descryption">Na základě Vaší soucasne váhy, výšky, a tělesných proporci stanovime soucasne a požadované BMI, WHR, BMR.</p>
                <a href="#contact"><button className="services-item__button">Mám zájem</button></a>
              </div>
              
              
              <div className="services-item">
                <h4 className="services-item__headline">Komplexní tělesná analýza</h4>
                <p className="services-item__descryption">Stanovení procenta tuku, svalů a vody v těle.</p>
                <a href="#contact"><button className="services-item__button">Mám zájem</button></a>
              </div>
              
              
              <div className="services-item">
                <h4 className="services-item__headline">Ukázkový jídelníček pro Vás </h4>
                <p className="services-item__descryption">Je možné sestavení jídelníčku na Vámi požadovaný počet dní.</p>
                <a href="#contact"><button className="services-item__button">Mám zájem</button></a>
              </div>
             
              
              <div className="services-item">
                <h4 className="services-item__headline">Indivuální výživový plán</h4>
                <p className="services-item__descryption">Po zhodnocení současného jídelníčku navrhneme společně nový Individuální výživový plán, tak aby vyhovoval Vaším možnostem a životnímu stylu.</p>
                <a href="#contact"><button className="services-item__button">Mám zájem</button></a>
              </div>

              <div className="services-item">
                <h4 className="services-item__headline">Výživové poradenství pro děti</h4>
                <p className="services-item__descryption">Probíhá stejně jako u dospělých. Je nutná přítomnost rodiče.  Vše se zohledňuje k věku, životnímu stylu, Vašim možnostem a tak aby byl akceptovatelný pro vás a Vaše dítě.</p>
                <a href="#contact"><button className="services-item__button">Mám zájem</button></a>
              </div>
              
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
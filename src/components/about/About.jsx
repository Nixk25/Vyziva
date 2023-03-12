import React from 'react'
import "./About.css"

const About = () => {
  return (
    <section id="about">
      <div className="container-about">
        <div className="about-wrapper">
          <div className="about-headline ">
            <h1 className='headline'>Něco málo <br /><span className='headline-bigger'>O mně</span></h1>
          </div>
          <div className="about-text">
            <div className="first-text">
              <p className='first-text__info'> Jmenuji se <b>Lucie</b>. Je mi 49 let a výživou se zabývám od svých <b>dvaceti let</b>. Prošla jsem všemi výživovými směry, ve kterých jsem zpočátku hledala to nejlepší nejen pro sebe. V roce 2016 jsem náhodně narazila na tehdejší novinku <b>Low Carb</b> (nízkosacharidové stravování) zhruba po roce na této stravě jsem postoupila na <b>LCHF</b> <b>( Low Carb High Fat- nízkosacharidová strava s vyšším příjmem tuků)</b>, od té doby jsem u tohoto typu stravování zůstala. Naprosto mi vyhovuje, zlepšil se můj <b>zdravotní stav</b> a <b>fyzická kondice</b> a podařilo se mi zredukovat a ustálit svoji váhu.</p>
            </div>
            <div className="second-text">
              <p className='second-text__info'>Protože mě výživa baví a chtěla jsem svoje znalosti zúročit, rozhodla jsem se, že absolvuji <b>akreditovaný výživový kurz</b> a své letité zkušenosti budu moc <b>uplatnit a pomáhat</b> tím dalším lidem.  V současné době jsem začala studovat <b>přírodní medicínu a psychosomatiku</b> a moc se těším až to vše skloubím dohromady.</p>
            </div>
            <div className="third-text">
              <p className="third-text__info"><b>Mohu pomoci i Vám se sestavováním racionálního, redukčního či objemového jídelníčku, nebo se spolu můžeme vydat na LOW CARB cestu... :-)</b> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
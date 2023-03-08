import React from 'react'
import "./Services.css"


const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services-wrapper">
            <div className="services-headline">
              <h1 className='headline'>Co nabízím za <br /> <span className='headline-bigger'><span className='headline-color'>S</span>l<span className='headline-color'>u</span>ž<span className='headline-color'>b</span>y</span> </h1>
            </div>
            <div className="services-items__wrapper">
              <a href="#" className='services-item__link'>
                <div className="services-item">
                <h4 className="services-item__headline">Úvodní osobní konzultace</h4>
                <p className="services-item__descryption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet saepe nam architecto consectetur pariatur repudiandae laborum odit delectus numquam autem?</p>
                <button className="services-item__button">Mám zájem</button>
              </div>
              </a>
              <a href="#" className='services-item__link'>
                <div className="services-item">
                <h4 className="services-item__headline">Základní tělesná analýza</h4>
                <p className="services-item__descryption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi rerum corporis vero reprehenderit expedita dolore cupiditate ex blanditiis neque quas.</p>
                <button className="services-item__button">Mám zájem</button>
              </div>
              </a>
              <a href="#" className='services-item__link'>
                <div className="services-item">
                <h4 className="services-item__headline">Komplexní tělesná analýza</h4>
                <p className="services-item__descryption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis expedita labore ipsa alias praesentium obcaecati corporis consequuntur eligendi facilis.</p>
                <button className="services-item__button">Mám zájem</button>
              </div>
              </a>
              <a href="#" className='services-item__link'>
                <div className="services-item">
                <h4 className="services-item__headline">Ukázkový jídelníček </h4>
                <p className="services-item__descryption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus ea cumque expedita ratione facilis ducimus tenetur tempora velit perferendis!</p>
                <button className="services-item__button">Mám zájem</button>
              </div>
              </a>
              <a href="#" className='services-item__link'>
                <div className="services-item">
                <h4 className="services-item__headline">Indivuální výživový plán</h4>
                <p className="services-item__descryption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ullam labore dolor cupiditate dolorem iusto tempore modi minus similique voluptatum.</p>
                <button className="services-item__button">Mám zájem</button>
              </div>
              </a>
              <a href="#" className='services-item__link'>
                <div className="services-item">
                <h4 className="services-item__headline">Výživové poradenství pro děti</h4>
                <p className="services-item__descryption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quidem similique, nostrum adipisci blanditiis non unde doloremque. Maxime, neque soluta!</p>
                <button className="services-item__button">Mám zájem</button>
              </div>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
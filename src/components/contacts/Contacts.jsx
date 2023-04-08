import React from 'react'
import "./Contacts.css"
import {ImLocation2} from "react-icons/im"
import {BsFillTelephoneInboundFill} from "react-icons/bs"
import {IoIosMail} from "react-icons/io"
import {RiInstagramFill} from "react-icons/ri"




const Contacts = () => {
  return (
    <section id="contact">
      <div className="container-contacts">
          <div className="contact-title">
            <h1 className="headline">Pošlete mi <br /> <span className='headline-bigger'>Zprávu</span></h1>
          </div>
        <div className="contact-block">
          <div class="contact-form">
            <span class="heading">Kontaktujte mě</span>
          <form action='https://formsubmit.co/nutricni.poradenstvi.vm@seznam.cz' method='POST'>
            <label for="jméno">Vaše jméno:</label>
            <input type="text" name='jméno' required></input>
            <label for="email">Váš e-mail:</label>
            <input type="email" id="email" name="email" required></input>
            <label for="zpráva">Napište mi zprávu:</label>
            <textarea id="message" name="zpráva" required></textarea>
            <button type="submit">Odeslat</button>
            
          </form>
          </div>
          <div className="contacts">
            <h1 className='contacts-title'>Kontakt na mě</h1>
            <a className='location' href="https://www.google.com/maps/place/Výživové+Poradenstv%C3%AD+Lucie/@49.9520795,16.1630052,17z/data=!3m1!4b1!4m6!3m5!1s0x470dc1192e940bc3:0x5ea83f73f67c527!8m2!3d49.9520795!4d16.1651939!16s%2Fg%2F11hndk7y2r"><span className='contact-icon'><ImLocation2/><span className='text-aside'>Nutriční poradenství Lucie, Žerotínova 438, Vysoké Mýto</span></span></a>
            <a className='telephone' href="tel:725100006"><span className='contact-icon'><BsFillTelephoneInboundFill/><span className='text-aside'> 725 100 006</span></span></a>
            <a className='location' href="mailto:nutricni.poradenstvi.vm@seznam.cz"><span className='contact-icon'><IoIosMail/><span className='text-aside'>nutricni.poradenstvi.vm@seznam.cz</span></span></a>
            <a className='instagram' href="https://www.instagram.com/nutricniporadenstvi.lucie/" rel='noreferrer' target={'_blank'}><span className='contact-icon'><RiInstagramFill/><span className='text-aside'>nutricniporadenstvilucie</span></span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
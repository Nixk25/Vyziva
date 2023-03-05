import React from 'react'
import "./Nav.css"
import {FaHome} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {RiServiceFill} from "react-icons/ri"
import {MdWork} from "react-icons/md"
import {AiTwotonePhone} from "react-icons/ai"
import { useState } from 'react'


const Nav = () => {
  const [activeNav,setActiveNav] = useState("#home")
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : " " }><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav ("#about")} className={activeNav === "#about" ? "active" : " " }><FaUserAlt/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : " " }><RiServiceFill/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : " " }><MdWork/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : " " }><AiTwotonePhone/></a>
    </nav>
  )
}

export default Nav
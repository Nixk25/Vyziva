import React from 'react'
import "./Nav.css"
import {FaHome} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {FaListUl} from "react-icons/fa"
import {MdWork} from "react-icons/md"
import {AiTwotonePhone} from "react-icons/ai"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [activeNav,setActiveNav] = useState("/home")
  return (
    <nav>
      <Link to="/" onClick={() => setActiveNav("/home")} className={activeNav === "/home" ? "active" : " " }><FaHome/></Link>
      <Link to="/about" onClick={() => setActiveNav ("/about")} className={activeNav === "/about" ? "active" : " " }><FaUserAlt/></Link>
      <Link to="/services" onClick={() => setActiveNav("/services")} className={activeNav === "/services" ? "active" : " " }><FaListUl/></Link>
      <Link to="/portfolio" onClick={() => setActiveNav("/portfolio")} className={activeNav === "/portfolio" ? "active" : " " }><MdWork/></Link>
      <Link to="/contact" onClick={() => setActiveNav("/contact")} className={activeNav === "/contact" ? "active" : " " }><AiTwotonePhone/></Link>
    </nav>
  )
}

export default Nav
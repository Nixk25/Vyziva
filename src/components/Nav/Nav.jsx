import React from 'react'
import "./Nav.css"
import {FaHome} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {FaListUl} from "react-icons/fa"
import {MdWork} from "react-icons/md"
import {AiTwotonePhone} from "react-icons/ai"
import { Link} from "react-scroll";


const Nav = () => {
  

  return (
    <nav>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100}duration={500}><FaHome/> </Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70}duration={500}> <FaUserAlt/> </Link>
      <Link activeClass="active" to="services" spy={true} smooth={true} offset={-200}duration={500}><FaListUl/> </Link>
      <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-35}duration={500}><MdWork/> </Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0}duration={500}><AiTwotonePhone/> </Link>
    </nav>
  )
}

export default Nav
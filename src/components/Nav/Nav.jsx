import React from 'react'
import "./Nav.css"
import {FaHome} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {FaListUl} from "react-icons/fa"
import {MdWork} from "react-icons/md"
import {HiShoppingCart} from "react-icons/hi"
import {AiTwotonePhone} from "react-icons/ai"
import { Link} from "react-scroll";



const Nav = () => {
  

  return (
    <div>
    <nav>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-200}duration={500}><FaHome/> </Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-220}duration={500}> <FaUserAlt/> </Link>
      <Link activeClass="active" to="services" spy={true} smooth={true} offset={-250}duration={500}><FaListUl/> </Link>
      <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-200}duration={500}><MdWork/> </Link>
      <Link activeClass='active' to='shop' spy={true} smooth={true} offset={-200}duration={500}><HiShoppingCart/></Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-300}duration={500}><AiTwotonePhone/> </Link>
    </nav>
    </div>
  )
}

export default Nav
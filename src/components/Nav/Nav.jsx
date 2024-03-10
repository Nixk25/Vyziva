import React, { useState } from "react";
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdClose, MdMenu, MdWork } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="navbar">
      <nav>
        <div className="nav-elements">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <FaHome />
          </Link>
          <div className="nav-desc">
            <h3>Domov</h3>
          </div>
        </div>
        <div className="nav-elements">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-220}
            duration={500}
          >
            {" "}
            <FaUserAlt />{" "}
          </Link>
          <div className="nav-desc">
            <h3>O mně</h3>
          </div>
        </div>
        <div className="nav-elements">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <FaListUl />{" "}
          </Link>
          <div className="nav-desc">
            <h3>Služby</h3>
          </div>
        </div>
        <div className="nav-elements">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <MdWork />{" "}
          </Link>
          <div className="nav-desc">
            <h3>Portfolio</h3>
          </div>
        </div>
        <div className="nav-elements">
          <Link
            activeClass="active"
            to="shop"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <HiShoppingCart />
          </Link>
          <div className="nav-desc">
            <h3>Obchod</h3>
          </div>
        </div>
        <div className="nav-elements">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <AiTwotonePhone />{" "}
          </Link>
          <div className="nav-desc">
            <h3>Kontakt</h3>
          </div>
        </div>
      </nav>
      <div className="menu-section">
        <div className="menu-icon">
          <MdMenu onClick={toggleMenu} size={30} />
        </div>
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <div onClick={toggleMenu} className="close-btn">
            <MdClose color="white" size={30} />
          </div>

          <div className="menu-content">
            <div className="menu-link">
              <Link to="home" onClick={toggleMenu}>
                <FaHome />
                <h3>Domov</h3>
              </Link>
              <div className="nav-desc"></div>
            </div>
            <div className="menu-link">
              <Link to="about" onClick={toggleMenu}>
                {" "}
                <FaUserAlt /> <h3>O mně</h3>
              </Link>
            </div>
            <div className="menu-link">
              <Link to="services" onClick={toggleMenu}>
                <FaListUl /> <h3>Služby</h3>
              </Link>
            </div>
            <div className="menu-link">
              <Link to="portfolio" onClick={toggleMenu}>
                <MdWork /> <h3>Portfolio</h3>
              </Link>
            </div>
            <div className="menu-link">
              <Link to="shop" onClick={toggleMenu}>
                <HiShoppingCart />
                <h3>Obchod</h3>
              </Link>
            </div>
            <div className="menu-link">
              <Link to="contact" onClick={toggleMenu}>
                <AiTwotonePhone /> <h3>Kontakt</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div>
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
    </div>
  );
};

export default Nav;

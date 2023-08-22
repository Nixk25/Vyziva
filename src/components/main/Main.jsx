import React from "react";
import LandingPage from "../landing-page/LandingPage";
import About from "../about/About";
import Services from "../services/Services";
import Nav from "../Nav/Nav";
import Portfolio from "../portfolio/Portfolio";
import Contacts from "../contacts/Contacts";
import Shop from "../Shop/Shop";
import Footer from "../footer/Footer";
const Main = ({ products }) => {
  return (
    <>
      <Nav />
      <LandingPage />
      <About />
      <Services />
      <Portfolio />
      <Shop products={products} />
      <Contacts />
      <Footer />
    </>
  );
};

export default Main;

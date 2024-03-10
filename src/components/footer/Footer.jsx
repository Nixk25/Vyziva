import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="copyright">
        Copyright ©️2023 Výživa Lucie. Všechna práva vyhrazena.
      </h4>
      <h4 className="author">
        Vytvořil{" "}
        <a href="https://www.nicolasmelda.com">
          <span>Nick</span>
        </a>
      </h4>
    </div>
  );
};

export default Footer;

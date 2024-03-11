import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="left">
        <h4 className="copyright">
          Copyright ©️2023 Výživa Lucie. <br /> Všechna práva vyhrazena.
        </h4>
        <h4 className="author">
          Vytvořil{" "}
          <a href="https://www.nicolasmelda.com">
            <span>Nick</span>
          </a>
        </h4>
      </div>

      <form
        className="form"
        action="https://formsubmit.co/nutricni.poradenstvi.vm@seznam.cz"
        method="POST"
      >
        <span class="heading">Odebírejte můj newsletter</span>
        <div className="input">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Váš email..."
            required
          ></input>

          <button type="submit">Odebírat</button>
        </div>
      </form>
    </div>
  );
};

export default Footer;

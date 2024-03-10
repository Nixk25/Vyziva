import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("Odebírat");
  const [isSend, setIsSend] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading("Posílání...");
    setTimeout(() => {
      setEmail("");
    }, 2000);
    setLoading("Odebírat");
    setIsSend(true);
  };
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
      {!isSend ? (
        <form
          className="form"
          action="https://formsubmit.co/nutricni.poradenstvi.vm@seznam.cz"
          method="POST"
          onSubmit={handleSubmit}
        >
          <span class="heading">Odebírejte můj newsletter</span>
          <div className="input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Váš email..."
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>

            <button type="submit">{loading}</button>
          </div>
        </form>
      ) : (
        <h3 className="thanks">Děkuji vám za odběr</h3>
      )}
    </div>
  );
};

export default Footer;

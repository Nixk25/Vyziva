import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container-about">
        <div className="about-wrapper">
          <div className="about-headline ">
            <h1 className="headline">
              Něco málo <br />
              <span className="headline-bigger">O mně</span>
            </h1>
          </div>
          <p className="about-text">
            Zdravím nové příchozí a všechny, kteří zavítali na můj web. A hned z
            kraje si dovolím napsat něco o sobě. Jmenuji se Lucka, a to že se
            zabývám výživou, zdravím životním stylem a s tím související pohodou
            duše a celého těla, není náhoda. Co jídlo umí a co dokáže se stalo
            mým koníčkem a vše co s jídlem souvisí mě baví, a to už víc jak
            dvacet let. Ze začátku jsem samozřejmě vše „testovala“ na sobě,
            známých, kamarádech a po řadě let a postupem času, když jsem byla
            přesvědčená, že už vím všechno 😊 jsem se přihlásila na akreditovaný
            kurz výživového poradce, a taky jsem se rozhodla vystudovat přírodní
            medicínu a psychosomatiku, kde jsem se pouze utvrdila v tom, že tudy
            povede moje cesta, a to co vím a znám, umím i použít a chci to učit
            i ostatní. A protože si uvědomuju, že internet je plný zaručených
            rad a tím jak na to, až se v tom samozřejmě všichni postupně ztrácí,
            tak jsem se rozhodla, že v tom udělám každému, kdo bude mít zájem
            jednou provždy jasno a postupně dojdeme k tomu, že to vlastně žádná
            velká věda není a že každý většinou potřebuje jenom ukázat směr a na
            konci bude zdravé a štíhlé tělo, šťastná hlava a všichni spokojení
            Největší odměnou je každé vaše ztracené kilo a znovu nabyté
            sebevědomí Přeju všem krásné dny a pozitivní mysl😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

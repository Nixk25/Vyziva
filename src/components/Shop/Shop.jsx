import React from "react";
import "./Shop.css";
import Product from "./Product";

const Shop = ({ products }) => {
  return (
    <section id="shop" className="shop">
      <div className="container">
        <div className="shop-wrapper">
          <div className="shop-headline">
            <h1 className="headline">
              Něco si můžete <br />
              <span className="headline-bigger">Koupit</span>
            </h1>
          </div>
          <div className="products">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

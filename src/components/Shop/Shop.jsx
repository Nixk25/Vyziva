import React from "react";
import "./Shop.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const Shop = ({ products, handleAddToCart, totalItems }) => {
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
              <Product
                product={product}
                handleAddToCart={handleAddToCart}
                key={product.id}
              />
            ))}
          </div>
          <div className="cart-total">
            <Link to="/cart" className="cart-icon">
              <HiShoppingCart />
            </Link>
            <span className="totalProducts">{totalItems}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="container">
        <div className="description">
          <img
            className="product-img"
            src={product.image.url}
            alt="vyzivove doplnky"
          />
          <p className="name">
            <b>{product.name}</b>
          </p>
          <div className="buttons">
            <Link to={`product-view/${product.id}`}>
              <button className="more-info">
                <span className="button-text">Více informací</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

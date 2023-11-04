import React from "react";
import "./Product.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ product, handleAddToCart }) => {
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
          <strong>
            <p className="price">Cena: {product.price.formatted_with_code}</p>
          </strong>
          <div className="buttons">
            <button
              className="addToCartBtn"
              onClick={() => handleAddToCart(product.id, 1)}
            >
              <span className="button-text">Přidat do košíku</span>
              <span className="button-icon">
                <AiOutlinePlus />
              </span>
            </button>
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

import React, { useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
import { Link } from "react-router-dom";
import "./ProductView.css";

const ProductView = () => {
  const [product, setProduct] = useState({});

  const fetchProducts = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, image, description } = response;
    setProduct({ id, name, description, image, price });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProducts(id);
  }, []);

  return (
    <section className="product-view">
      <div className="container">
        <div className="product-view">
          <div className="product-view__info">
            <div className="img-wrapper">
              <img src={product.image?.url} alt="" />
            </div>
            <div className="text">
              <div className="upper-title">
                <h2 className="title">{product?.name}</h2>
                <Link to="/">
                  <button className="back-to__main">Jít zpět nakupovat</button>
                </Link>
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="product-view__description"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;

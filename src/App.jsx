import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import { commerce } from "../src/components/lib/commerce";
import ProductView from "./components/Shop/ProductView";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState("true");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      onLoad={() => {
        setIsLoading(false);
      }}
    >
      {isLoading ? <Spinner /> : ""}
      <Router>
        <Routes>
          <Route path="/" element={<Main products={products} />} />
          <Route path="/product-view/:id" element={<ProductView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

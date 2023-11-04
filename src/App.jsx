import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Main from "./components/main/Main";
import { commerce } from "../src/components/lib/commerce";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import ProductView from "./components/Shop/ProductView";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    const incomingOrder = await commerce.checkout.capture(
      checkoutTokenId,
      newOrder
    );
    setOrder(incomingOrder);
    refreshCart();
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                products={products}
                handleAddToCart={handleAddToCart}
                totalItems={cart?.total_items}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                handleCaptureCheckout={handleCaptureCheckout}
              />
            }
          />
          <Route
            path="/product-view/:id"
            element={
              <ProductView
                handleAddToCart={handleAddToCart}
                totalItems={cart?.total_items}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

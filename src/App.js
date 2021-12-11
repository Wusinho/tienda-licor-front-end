import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getApi } from "./store/products.js";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const api = useSelector(getApi);
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...productExist,
                quantity: productExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearence = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home api={api} handleAddProduct={handleAddProduct} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearence={handleCartClearence}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { isloading, getApi } from "./store/products.js";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const api = useSelector((state) => state.entities.products.list);

  const [products, setProducts] = useState([]);
  const loadginStat = useSelector(isloading);
  const apiResponse = useSelector(getApi);

  useEffect(() => {
    if (api) {
      setProducts(api);
    }
  });

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home api={api} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

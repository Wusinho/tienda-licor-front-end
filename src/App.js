import React from "react";
import Nav from "./components/Nav.jsx";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import store from "./store/configureStore";
import { loadProducts } from "./store/products";

// store.dispatch(loadProducts());

function App() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

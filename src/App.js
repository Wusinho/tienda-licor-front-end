import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { getApi, loadProducts } from './store/products';
// eslint-disable-next-line import/no-named-as-default
import Home from './components/Home';
import Search from './components/Search';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch();
  const api = useSelector(getApi);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) => (item.id === product.id
          ? {
            ...productExist,
            quantity: productExist.quantity + 1,
          }
          : item)),
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
        cartItems.map((item) => (item.id === product.id
          ? { ...productExist, quantity: productExist.quantity - 1 }
          : item)),
      );
    }
  };

  const handleCartClearence = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              api={api}
              handleAddProduct={handleAddProduct}
              itemsPerPage={12}
            />
          )}
        />
        <Route
          path="/search"
          element={<Search handleAddProduct={handleAddProduct} />}
        />
        <Route
          path="/cart"
          element={(
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearence={handleCartClearence}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;

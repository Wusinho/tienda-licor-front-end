import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { loadProducts } from "./store/products";

store.dispatch(loadProducts());

function App() {
  return (
    <Provider store={store}>
      <div className="App">Hello</div>;
    </Provider>
  );
}

export default App;

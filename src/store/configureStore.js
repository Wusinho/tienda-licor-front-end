import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
import categories from "./middleware/categories";

const store = configureStore({
  reducer,
  middleware: [api, categories],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

const store = configureStore({
  reducer,
  middleware: [api],
});

export default store;

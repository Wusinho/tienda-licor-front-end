/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { apiCallBegan } from "./api";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: {},
    category: "All",
    selected: {},
    error: "",
  },
  reducers: {
    productsRequested: (products) => {
      products.loading = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
    },
    productsRequestFailed: (products, action) => {
      products.error = action.payload;
      products.loading = false;
    },
  },
});
export const isloading = (state) => state.entities.products.loading;
export const getApi = (state) => state.entities.products.list;

export const { productsReceived, productsRequested, productsRequestFailed } =
  productSlice.actions;

export default productSlice.reducer;

const url = "http://localhost:4000/products";

export const loadProducts = () =>
  apiCallBegan({
    url,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError: productsRequestFailed.type,
  });

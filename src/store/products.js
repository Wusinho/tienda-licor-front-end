/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, categoriesCallBegan, searchCallBegan } from "./api";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: {},
    categories: {},
    error: "",
    search: {},
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
    categoriesRequested: (products) => {
      products.loading = true;
    },
    categoriesReceived: (products, action) => {
      products.categories = action.payload;
      products.loading = false;
    },
    categoriesRequestFailed: (products, action) => {
      products.error = action.payload;
      products.loading = false;
    },
    searchRequested: (products) => {
      products.loading = true;
    },
    searchReceived: (products, action) => {
      products.search = action.payload;
      products.loading = false;
    },
    searchRequestFailed: (products, action) => {
      products.error = action.payload;
      products.loading = false;
    },
  },
});
export const isloading = (state) => state.entities.products.loading;
export const getApi = (state) => state.entities.products.list;
export const getCategories = (state) => state.entities.products.categories;
export const getSearch = (state) => state.entities.products.search;

export const {
  productsReceived,
  productsRequested,
  productsRequestFailed,
  categoriesRequested,
  categoriesReceived,
  categoriesRequestFailed,
  searchRequested,
  searchReceived,
  searchRequestFailed,
} = productSlice.actions;

export default productSlice.reducer;

// const BASEURL = 'https://bsale-online-store.herokuapp.com/';
const BASEURL = "http://localhost:4000/";

export const loadProducts = () =>
  apiCallBegan({
    BASEURL,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError: productsRequestFailed.type,
  });

export const loadCategories = () =>
  categoriesCallBegan({
    BASEURL,
    onStart: categoriesRequested.type,
    onSuccess: categoriesReceived.type,
    onError: categoriesRequestFailed.type,
  });

export const requestSearch = (params) =>
  searchCallBegan({
    params,
    BASEURL,
    onStart: searchRequested.type,
    onSuccess: searchReceived.type,
    onError: searchRequestFailed.type,
  });

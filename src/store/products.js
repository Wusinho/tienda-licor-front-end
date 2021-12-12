/* eslint-disable no-param-reassign */
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

const url = "http://localhost:4000/products";
const url2 = "http://localhost:4000/categories";
const url3 = "http://localhost:4000/products?search=";

export const loadProducts = () =>
  apiCallBegan({
    url,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError: productsRequestFailed.type,
  });

export const loadCategories = () =>
  categoriesCallBegan({
    url2,
    onStart: categoriesRequested.type,
    onSuccess: categoriesReceived.type,
    onError: categoriesRequestFailed.type,
  });

export const requestSearch = (params) =>
  searchCallBegan({
    params,
    url3,
    onStart: searchRequested.type,
    onSuccess: searchReceived.type,
    onError: searchRequestFailed.type,
  });

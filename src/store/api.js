import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");

export const categoriesCallBegan = createAction("categories/callBegan");
export const categoriesCallSuccess = createAction("categories/callSuccess");
export const categoriesCallFailed = createAction("categories/callFailed");

export const searchCallBegan = createAction("search/callBegan");
export const searchCallSuccess = createAction("search/callSuccess");
export const searchCallFailed = createAction("search/callFailed");

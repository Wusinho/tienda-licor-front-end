/* eslint-disable */

import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const search =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.searchCallBegan.type) return next(action);

    const { ids, otherparams, BASEURL, onStart, onSuccess, onError } =
      action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    let params = `cid=${ids}&`;
    Object.entries(otherparams).forEach(([key, value]) => {
      if (key == "name" && value != "") {
        console.log(`name value = ${value}`);
        params += `search=${value}&`;
      } else if (key == "discount") {
        params += `discount=${value}&`;
      } else if (key == "price") {
        params += `price=${value}&`;
      }
    });

    const url = `${BASEURL}products?`;

    const getSearch = url + params;

    console.log(getSearch);
    axios
      .get(getSearch, { mode: "cors" })
      .then((response) => {
        dispatch(actions.searchCallSuccess(response.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      })
      .catch((error) => {
        dispatch(actions.searchCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
      });
  };

export default search;

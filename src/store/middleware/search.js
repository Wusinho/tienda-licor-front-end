/* eslint-disable */

import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const search =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.searchCallBegan.type) return next(action);

    const { params, BASEURL, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    const search = `${BASEURL}products?search=`;

    let string = "";
    Object.entries(params).forEach(
      // eslint-disable-next-line no-return-assign
      ([key, value]) => (string += `${key}=${value}&`)
    );
    const getSearch = search + string;
    console.log(params);
    console.log(getSearch);
    axios
      .get(getSearch, { search: params }, { mode: "cors" })
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

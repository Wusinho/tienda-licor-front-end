import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { BASEURL, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    const products = BASEURL + "products";

    axios
      .get(products, { mode: "cors" })
      .then((response) => {
        dispatch(actions.apiCallSuccess(response.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      })
      .catch((error) => {
        dispatch(actions.apiCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
      });
  };

export default api;

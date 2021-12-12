import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const categories =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.categoriesCallBegan.type) return next(action);

    const { url2, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    axios
      .get(url2, { mode: "cors" })
      .then((response) => {
        dispatch(actions.categoriesCallSuccess(response.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      })
      .catch((error) => {
        dispatch(actions.categoriesCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
      });
  };

export default categories;

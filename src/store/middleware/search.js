import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const search =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.searchCallBegan.type) return next(action);

    const { params, url3, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    let string = "";
    Object.entries(params).forEach(
      ([key, value]) => (string += `${key.replace(/\s+/g, "")}=${value}&`)
    );
    const getSearch = url3 + string;
    axios
      .get(getSearch, params, { mode: "cors" })
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

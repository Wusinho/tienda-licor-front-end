/* eslint-disable */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, requestSearch, getSearch } from "../store/products";
import Nothing from "./Nothing";
import Card from "./Card";
import Loading from "./Loading.jsx";
import ids from "../functions/ids";

const Search = ({ handleAddProduct }) => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({
    "bebida energetica": false,
    pisco: false,
    ron: false,
    bebida: false,
    snack: false,
    cerveza: false,
    vodka: false,
  });

  const [otherParams, setotherParams] = useState({
    name: "",
    discount: false,
    price: 20,
  });

  const categories = useSelector(getCategories);
  const search = useSelector(getSearch);

  const handleChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChangeValue = (e) => {
    if (e.target.name == "discount") {
      setotherParams({
        ...otherParams,
        [e.target.name]: e.target.checked,
      });
    } else {
      setotherParams({
        ...otherParams,

        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    dispatch(requestSearch(ids(checkedItems, categories), otherParams));
    e.preventDefault();
  };

  return (
    <div className="mx-5">
      {categories.length > 0 ? (
        <div className="row">
          <div className="col-md-3 ">
            <form className="row g-3 mt-5 mx-4">
              <div className="mb-3">
                <label className="form-label">Find </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search for a Drink"
                  onChange={handleChangeValue}
                  name="name"
                />
              </div>
              {categories.map((item) => (
                <div className="mb-3 form-check" key={item.id}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onChange={handleChange}
                    name={item.name}
                    checked={checkedItems[item.name]}
                    value={item.id}
                  />
                  <label className="form-check-label">{item.name}</label>
                </div>
              ))}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleChangeValue}
                  name="discount"
                  checked={otherParams["discount"]}
                />
                <label className="form-check-label">discount</label>
              </div>

              <div className="p-2">
                <p className="text-muted">Search by price</p>

                <div>
                  <span className="amount">
                    Max price: ${otherParams["price"] * 1000}
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="range"
                    className="form-range"
                    name="price"
                    min="0"
                    max="20"
                    step="1"
                    id="customRange3"
                    onChange={handleChangeValue}
                  />
                  <div className="d-flex justify-content-between">
                    <small className="text-muted">$0</small>
                    <small className="text-muted">$20,000</small>
                  </div>
                </div>
              </div>
              <button onClick={handleSubmit} className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-9 p-0">
            <div className="container p-0">
              {search.length === 1 && <h1>{search.length} match</h1>}
              {search.length > 1 && <h1>{search.length} matches</h1>}

              <div className="row row-cols-1 row-cols-md-3 g-4 p-0">
                {search.length > 0 ? (
                  search.map((item) => (
                    <Card
                      key={item.id}
                      item={item}
                      handleAddProduct={handleAddProduct}
                    />
                  ))
                ) : (
                  <Nothing />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Search;

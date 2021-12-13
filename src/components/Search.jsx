import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCategories,
  getCategories,
  requestSearch,
  getSearch,
} from "../store/products";
import Nothing from "./Nothing";
import Card from "./Card";
import Loading from "./Loading.jsx";

const Search = ({ handleAddProduct }) => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({
    "bebida energetica": false,
    name: "",
    pisco: false,
    ron: false,
    bebida: false,
    snack: false,
    cerveza: false,
    vodka: false,
    discount: true,
    price: 20,
  });
  const categories = useSelector(getCategories);
  const search = useSelector(getSearch);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  };
  const handleChangePrice = (e) => {
    setCheckedItems({
      ...checkedItems,
      price: e.target.value,
    });
  };
  const handleNameChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      name: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(requestSearch(checkedItems));
  }, [dispatch, checkedItems]);
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
                  onChange={handleNameChange}
                  name={checkedItems["name"]}
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
                  />
                  <label className="form-check-label">{item.name}</label>
                </div>
              ))}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleChange}
                  name="discount"
                  checked={checkedItems["discount"]}
                />
                <label className="form-check-label">discount</label>
              </div>

              <div className="card p-2">
                <p className="text-muted">Search by price</p>

                <div>
                  <span className="amount">
                    Max price: ${checkedItems["price"] * 1000}
                  </span>{" "}
                </div>
                <div className="mt-2">
                  <input
                    type="range"
                    className="form-range"
                    name={checkedItems["price"]}
                    min="0"
                    max="20"
                    step="1"
                    id="customRange3"
                    onChange={handleChangePrice}
                  />
                  <div className="d-flex justify-content-between">
                    <small className="text-muted">$0</small>{" "}
                    <small className="text-muted">$20,000</small>{" "}
                  </div>
                </div>
              </div>
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

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
    discount: true,
    price: 9,
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
  useEffect(() => {
    dispatch(requestSearch(checkedItems));
  }, [dispatch, checkedItems]);
  return (
    <div className="">
      <div className="row">
        <div className="col-md-3 ">
          <form className="row g-3  p-4">
            {categories.length > 0 &&
              categories.map((item) => (
                <label key={item.id}>
                  {item.name}
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name={item.name}
                    checked={checkedItems[item.name]}
                  />
                </label>
              ))}
            <label>
              discount
              <input
                onChange={handleChange}
                type="checkbox"
                name="discount"
                checked={checkedItems["discount"]}
              />
            </label>
          </form>

          <div className="container d-flex justify-content-center ">
            <div className="card p-3">
              <h5 className="font-weight-bold">Setup your pricing</h5>
              <p className="text-muted">Choose a value</p>

              <div>
                <span className="amount">${checkedItems["price"] * 1000}</span>{" "}
              </div>
              <div className="mt-2">
                <input
                  type="range"
                  className="form-range"
                  name={checkedItems["price"]}
                  min="0"
                  max="9"
                  step="1"
                  id="customRange3"
                  onChange={handleChangePrice}
                />
                <div className="d-flex justify-content-between">
                  <small className="text-muted">$0</small>{" "}
                  <small className="text-muted">$9000</small>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
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
    </div>
  );
};

export default Search;

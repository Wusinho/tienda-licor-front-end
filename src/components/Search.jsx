import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCategories,
  getCategories,
  requestSearch,
  getSearch,
} from "../store/products";
import Loading from "./Loading.jsx";
import Card from "./Card";

const Search = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({
    "bebida energetica": false,
    pisco: false,
    ron: false,
    bebida: false,
    snack: false,
    cerveza: false,
    vodka: false,
    discount: false,
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
              <input onChange={handleChange} type="checkbox" name="discount" />
            </label>
          </form>
        </div>
        <div className="col">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {search.length > 0 ? (
                search.map((item) => <Card key={item.id} item={item} />)
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

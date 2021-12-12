import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories, getCategories } from "../store/products";

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

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.value,
    });
  };
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
                    value={checkedItems[item.name]}
                  />
                </label>
              ))}
            <label>
              discount
              <input onChange={handleChange} type="checkbox" name="discount" />
            </label>
          </form>
        </div>
        <div className="col">Show Results</div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCategories } from "../store/products";

const Search = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);
  const checkboxes = [
    {
      name: "bebida energetica",
      key: "1",
      label: "Bebida Energetica",
    },
    {
      name: "pisco",
      key: "2",
      label: "Pisco",
    },
    {
      name: "ron",
      key: "3",
      label: "Ron",
    },
    {
      name: "bebida",
      key: "4",
      label: "Bebida",
    },
    {
      name: "snack",
      key: "5",
      label: "Snack",
    },
    {
      name: "cerveza",
      key: "6",
      label: "Ceverza",
    },
    {
      name: "vodka",
      key: "7",
      label: "Vodka",
    },
  ];

  // const handleChange = (e) => {
  //   setData({
  //     [e.target.name]: data.map((checkbox, i) => {
  //       return i !== e.target.name
  //         ? [e.target.name]
  //         : { ...data, [e.target.value]: !e.target.value };
  //     }),
  //   });
  // };
  const handleChange = (e) => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  };
  console.log(checkedItems);

  return (
    <div className="">
      <div className="row">
        <div className="col-md-3 ">
          <form className="row g-3  p-4">
            {checkboxes.map((item) => (
              <label key={item.key}>
                {item.label}
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name={item.name}
                  checked={checkedItems[item.name]}
                  defaultValue={false}
                />
              </label>
            ))}
          </form>
        </div>
        <div className="col">Show Results</div>
      </div>
    </div>
  );
};

export default Search;

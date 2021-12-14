/* eslint-disable */
import React from "react";
import realprice from "../functions/realprice";
import "../style/Card.css";

const Card = ({ item, handleAddProduct }) => {
  return (
    <div className="col">
      <div className="card position-relative">
        {item.url_image === "" ? (
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="foto de licor"
          />
        ) : (
          <img src={item.url_image} className="card-img-top" alt={item.name} />
        )}
        <div className="card-body">
          <h3 className="card-title"> {item.name}</h3>
          <h6 className="card-title">price: {item.price} $</h6>
          {item.discount !== 0 ? (
            <>
              <h5 className="off bg-danger text-center pt-2">
                {item.discount}% OFF
              </h5>
              <h1 className="card-title sale">
                Sale: {realprice(item.price, item.discount)}$
              </h1>
            </>
          ) : null}
          <p className="card-text"></p>
        </div>
        <div className="card-footer bg-transparent ">
          <button
            className="btn btn-primary"
            onClick={() => handleAddProduct(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

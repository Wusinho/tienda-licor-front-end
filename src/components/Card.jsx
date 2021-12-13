import React from "react";
import realprice from "../functions/realprice";
import "../style/Card.css";

const Card = ({ item, handleAddProduct }) => {
  return (
    <div className="col">
      <div className="card">
        {item.url_image === "" ? (
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
        ) : (
          <img src={item.url_image} className="card-img-top" alt="..." />
        )}
        <div className="card-body">
          <h5 className="card-title"> {item.name}</h5>
          <h5 className="card-title">price: {item.price} $</h5>
          {item.discount !== "0" && (
            <>
              <h5 className="card-title">discount: {item.discount}%</h5>
              <h3 className="card-title">
                on Sale: {realprice(item.price, item.discount)}$
              </h3>
            </>
          )}
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

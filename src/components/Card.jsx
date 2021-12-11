import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.url_image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h5 className="card-title">{item.price}</h5>
        <h5 className="card-title">{item.discount}</h5>
        <p className="card-text"></p>
        <div className="card-footer">
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";
import Loading from "./Loading";

export const Home = ({ api, handleAddProduct }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {api.length > 0 ? (
        api.map((item) => (
          <Card key={item.id} item={item} handleAddProduct={handleAddProduct} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Home;

/* eslint-disable */

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";

export const Home = ({ api, handleAddProduct, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (api.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(api.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(api.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, api]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % api.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <Card
                key={item.id}
                item={item}
                handleAddProduct={handleAddProduct}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};
export default Home;

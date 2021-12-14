/* eslint-disable */

import React from "react";
import "../style/Loading.css";

const Loading = () => (
  <div className=" d-flex aligns-items-center justify-content-center">
    <div className=" ">
      <h2>Oopz! Something went wrong. Please come back in a few minutes</h2>
      <small>
        or conctact:
        <a href="mailto: help@helpdesk.com">help@helpdesk.com</a>
      </small>
      <div className="bar "></div>
    </div>
  </div>
);

export default Loading;

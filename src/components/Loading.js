import React from "react";
import Spinner from "../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Rooms loading..</h4>
      <img src={Spinner} alt="loading" />
    </div>
  );
}

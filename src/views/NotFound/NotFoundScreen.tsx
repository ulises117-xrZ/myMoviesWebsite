import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
        <h1>
      404
        </h1>
        <h1>
      NOT FOUND
        </h1>
      <p>
        return to: <Link to={"/"}>Home</Link>
      </p>
    </div>
  );
};

export default NotFoundScreen;

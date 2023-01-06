import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"

const Error = () => {
  return (
    <div className="error-main flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to={"/"}
            className="px-8 py-3 font-semibold rounded"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

import React from 'react';
import { RotatingLines } from "react-loader-spinner";
import "./LargeSpinner.css"

const LargeSpinner = () => {
    return (
      <div className="large-spinner">
        <RotatingLines
          strokeColor="#F88767"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
};

export default LargeSpinner;
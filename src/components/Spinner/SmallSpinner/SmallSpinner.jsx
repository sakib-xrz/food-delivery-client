import React from 'react';
import "./SmallSpinner.css"

const SmallSpinner = () => {
    return (
      <div className="spinner-div flex justify-center items-center h-full">
        <div className="small-spinner w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white"></div>
      </div>
    );
};

export default SmallSpinner;
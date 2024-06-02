import React from "react";

const MobileButtonGroup = ({ selectedButton, handleButtonClick }) => {
  return (
    <div className="overflow-x-auto flex">
      <button
        className={`mt-3 text-center text-xl rounded-t-xl py-2 px-2 text-gray-500 hover:bg-green-900 hover:text-white mr-10 ${selectedButton === "Fresh Produce" && "bg-green-900 text-white"}`}
        onClick={() => handleButtonClick("Fresh Produce")}
      >
        Fresh Produce
      </button>

      <button
        className={`mt-3 text-center text-xl rounded-t-xl py-2 px-2 text-gray-500 hover:bg-green-900 hover:text-white mr-10 ${selectedButton === "Organic Products" && "bg-green-900 text-white"}`}
        onClick={() => handleButtonClick("Organic Products")}
      >
        Organic Products
      </button>

      <button
        className={`mt-3 text-center text-xl rounded-t-xl py-2 px-2 text-gray-500 hover:bg-green-900 hover:text-white mr-10 ${selectedButton === "Point of Sale" && "bg-green-900 text-white"}`}
        onClick={() => handleButtonClick("Point of Sale")}
      >
        Point of Sale
      </button>
    </div>
  );
};

export default MobileButtonGroup;

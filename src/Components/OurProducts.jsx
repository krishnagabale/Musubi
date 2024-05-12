import React from "react";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";

export const OurProducts = () => {
  return (
    <div className="bg-gray-200 mt-10 w-screen h-full">
      <h1 className="font-bold text-xl bg-gray-200 text-center items-center justify-center">
        --Our Products--
      </h1>

      <h1 className="my-5 font-bold text-5xl text-green-900 justify-center text-center items-center">
        Avocado ipsum dolor meat
        <br />
        lovers buffalo. Pan NY
      </h1>

      <div className="d-flex flex flex-col md:flex-row  justify-center items-center w-4/5 mx-auto">
        <button class=" mt-3 text-center text-xl rounded-xl py-2 px-2 text-gray-500 text-white-600 hover:bg-green-900 hover:text-white mr-10">
          Fresh Produce
        </button>

        <button class=" mt-3 text-center text-xl rounded-xl py-2 px-2 text-gray-500 text-white-600 hover:bg-green-900 hover:text-white mr-10">
          Organic Products
        </button>

        <button class=" mt-3 text-center text-xl rounded-xl py-2 px-2 text-gray-500 text-white-600 hover:bg-green-900 hover:text-white mr-10">
          Point of sale
        </button>
      </div>

      <div className="flex justify-center p-5">
        <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto m-5">
          {/* --column1-- */}
          <div className="max-w-sm rounded overflow-hidden mr-7 relative">
            <img class="w-full h-auto " src={Product1} alt="product1" />
            <div class="text-xl absolute bottom-0 left-0 right-0  bg-opacity-50 text-white p-5">
              Product Name
            </div>
          </div>

          {/* --column2-- */}
          <div className="max-w-sm rounded overflow-hidden mr-7 relative">
            <img class="w-full h-auto" src={Product2} alt="product2" />
            <div class="text-xl absolute bottom-0 left-0 right-0  bg-opacity-50 text-white p-5">
              Product Name
            </div>
          </div>

          {/* --column3-- */}
          <div className="max-w-sm rounded overflow-hidden mr-7 relative">
            <img class="w-full h-auto" src={Product3} alt="product3" />
            <div class="text-xl absolute bottom-0 left-0 right-0  bg-opacity-50 text-white p-5">
              Product Name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

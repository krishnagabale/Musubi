import React, { useEffect } from "react";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";

export const OurProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-200 mt-10 w-screen h-full">
      <h1 className="font-bold text-lg md:text-xl bg-gray-200 text-center">
        --Our Products--
      </h1>

      <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900 text-center">
        Avocado ipsum dolor meat
        <br />
        lovers buffalo. Pan NY
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-4/5 mx-auto gap-4">
        <button className="mt-3 text-center text-xl rounded-xl py-2 px-4 text-gray-500 bg-white hover:bg-green-900 hover:text-white">
          Fresh Produce
        </button>

        <button className="mt-3 text-center text-xl rounded-xl py-2 px-4 text-gray-500 bg-white hover:bg-green-900 hover:text-white">
          Organic Products
        </button>

        <button className="mt-3 text-center text-xl rounded-xl py-2 px-4 text-gray-500 bg-white hover:bg-green-900 hover:text-white bg-green-900 text-white">
          Point of Sale
        </button>
      </div>

      <div className="w-full md:w-4/5 mx-auto border-b-2 border-green-600"></div>

      <div className="flex flex-col md:flex-row justify-center md:p-5">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 mx-auto gap-5">
          {/* --column1-- */}
          <div className="w-full md:w-1/3 max-w-sm rounded overflow-hidden relative">
            <img className="w-full h-auto" src={Product1} alt="product1" />
            <div className="text-xl absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-5">
              Product Name
            </div>
          </div>

          {/* --column2-- */}
          <div className="w-full md:w-1/3 max-w-sm rounded overflow-hidden relative">
            <img className="w-full h-auto" src={Product2} alt="product2" />
            <div className="text-xl absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-5">
              Product Name
            </div>
          </div>

          {/* --column3-- */}
          <div className="w-full md:w-1/3 max-w-sm rounded overflow-hidden relative">
            <img className="w-full h-auto" src={Product3} alt="product3" />
            <div className="text-xl absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-5">
              Product Name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

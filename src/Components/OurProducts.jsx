import React, { useEffect, useState } from "react";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import MobileButtonGroup from "./MobileButtonGroup";

export const OurProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedButton, setSelectedButton] = useState('Fresh Produce');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="bg-gray-200 mt-10 pt-14 md:w-full">
    <h1 className="font-bold text-lg md:text-xl text-center items-center justify-center">
      Products--
    </h1>

    <h1 className="my-5 font-bold text-5xl md:text-5xl text-green-900 justify-center text-center items-center">
      Avocado ipsum dolor meat
    </h1>
    <p className="w-full p-4 md:w-3/5 md:mx-auto justify-center text-center items-center mx-auto">
      Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large large
      tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch
      hand lasagna anchovies. Platter beef thin burnt chicken pesto pesto
      anchovies garlic broccoli. Mushrooms bacon party anchovies large beef
      buffalo style tomatoes.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center w-4/5 mx-14 md:mx-auto">
      <MobileButtonGroup selectedButton={selectedButton} handleButtonClick={handleButtonClick} />
    </div>

    {/* Thin line - Visible only on desktop */}
    <div className="hidden md:block w-full mx-14 md:mx-auto border-b-2 border-green-800" />

    <div className="flex flex-col md:flex-row justify-center md:p-5">
      <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-12 md:mx-auto m-5 gap-5 md:gap-0">
        {/* --column1-- */}
        <div className="max-w-sm rounded overflow-hidden mr-7 relative">
          <img
            className="w-full h-auto"
            src={Product1}
            alt="product1"
          />
          <div className="text-xl absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-5">
            Product Name
          </div>
        </div>

        {/* --column2-- */}
        <div className="max-w-sm rounded overflow-hidden mr-7 relative">
          <img
            className="w-full h-auto"
            src={Product2}
            alt="product2"
          />
          <div className="text-xl absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-5">
            Product Name
          </div>
        </div>

        {/* --column3-- */}
        <div className="max-w-sm rounded overflow-hidden mr-7 relative">
          <img
            className="w-full h-auto"
            src={Product3}
            alt="product3"
          />
          <div className="text-xl absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-5">
            Product Name
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

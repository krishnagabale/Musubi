import React from "react";
import partner1 from '../assets/logo.png'

export const Parntners = () => {
  return (
    <div className="bg-gray-200 mt-10 mb-10 w-screen h-full">
      <h1 className="my-5 font-bold text-5xl text-green-900 justify-center text-center items-center">
        Some of Our Parntners
      </h1>
      <div className="flex justify-center m-10">
        {/* Partner Logos */}
        <div className="flex">
          <img src={partner1} alt="Partner 1" className="h-16 mr-12" />
          <img src={partner1} alt="Partner 2" className="h-16 mr-12" />
          <img src={partner1} alt="Partner 1" className="h-16 mr-12" />
          <img src={partner1} alt="Partner 2" className="h-16 mr-12" />
        </div>
      </div>
      <div className="mx-auto w-4/5 bg-gradient-to-r from-green-800 to-green-950 p-6 rounded-xl flex items-center">
        {/* Left side content */}
        <div className="flex-1 w-1/2 p-4">
          <h2 className="text-white text-6xl font-semibold mb-2">
            Avocado ipsum <br /> dolor meat
          </h2>
          <p className="text-white text-md">
            Pizza ipsum dolor meat lovers buffalo. Cheese <br /> anchovies large large
            tomato fresh. Bianca personal roll <br /> pizza meat meatball
          </p>
        </div>
        {/* Right side content */}
        <div className="flex-1 ml-6 w-1/2 p-4">
          <input
            type="text"
            className="w-4/5 p-2 rounded-2xl border border-white"
            placeholder="Enter your text here"
          />
        </div>
      </div>
    </div>
  );
};

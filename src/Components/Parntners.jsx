import React from "react";
import Partner1 from '../assets/logo.png'
import Partner2 from '../assets/Maaif.png'
import Partner3 from '../assets/Naads.png'
import Partner4 from '../assets/Naro.png'
import Partner5 from '../assets/taproot.png'
import Partner6 from '../assets/Naads.png'

export const Parntners = () => {
  return (
    <div className="bg-white md:p-12 py-10 w-screen h-full">
      <h1 className="font-bold text-3xl md:text-5xl text-green-900 justify-center text-center items-center">
        Some of Our Parntners
      </h1>
      <div className="flex justify-center m-10 items-center text-center">
        {/* Partner Logos */}
        <div className="flex flex-wrap gap-12 md:my-5">
        <img src={Partner2} alt="Partner 2" className="h-12 md:h-16" />
          <img src={Partner4} alt="Partner 4" className="h-12 md:h-16" />
          <img src={Partner3} alt="Partner 3" className="h-12 md:h-16" />
          <img src={Partner1} alt="Partner 1" className="h-12 md:h-16" />
          <img src={Partner5} alt="Partner 5" className="h-12 md:h-16" />
          <img src={Partner6} alt="Partner 6" className="h-12 md:h-16" />


        </div>
      </div>
      <div className="mx-auto w-4/5 bg-gradient-to-r from-green-800 to-green-950 p-6 rounded-xl flex flex-col md:flex-row items-center">
        {/* Left side content */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-2">
            Avocado ipsum <br /> dolor meat
          </h2>
          <p className="text-white text-md">
            Pizza ipsum dolor meat lovers buffalo. Cheese <br /> anchovies large large
            tomato fresh. Bianca personal roll <br /> pizza meat meatball
          </p>
        </div>
        {/* Right side content */}
        <div className="w-full md:w-1/2 md:ml-6 p-4">
          <input
            type="text"
            className="w-full md:w-4/5 p-2 rounded-2xl border border-white"
            placeholder="Email"
          />
        </div>
      </div>
    </div>
  );
};

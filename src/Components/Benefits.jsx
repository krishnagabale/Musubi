import React from "react";
import Benefits1 from "../assets/Benefits1.png";
import Benefits2 from "../assets/Benefits2.png";
import Benefits3 from "../assets/Benefits3.png";

export const Benefits = () => {
  return (
    <div className="bg-gray-200 w-screen h-full">
      <h1 className="font-bold text-lg md:text-xl bg-gray-200 text-center items-center justify-center">
        --Benefits--
      </h1>

      {/* --column1-- */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 mx-auto my-10 md:my-0 px-4 md:px-0">
        <img src={Benefits1} alt="" className="w-full md:w-1/2" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900">
            Avocado ipsum dolor <br />
            meat.
          </h1>
          <p className="w-full text-base md:text-lg">
            Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large
            large tomato fresh. Bianca personal roll pizza meat meatball.
            Meatball ranch hand lasagna anchovies. Platter beef thin burnt
            chicken pesto pesto anchovies garlic broccoli.
          </p>
        </div>
      </div>

      {/* --column2-- */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 mx-auto my-10 md:my-0 px-4 md:px-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:order-first">
          <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900">
            Avocado ipsum dolor <br />
            meat.
          </h1>
          <p className="w-full text-base md:text-lg">
            Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large
            large tomato fresh. Bianca personal roll pizza meat meatball.
            Meatball ranch hand lasagna anchovies. Platter beef thin burnt
            chicken pesto pesto anchovies garlic broccoli.
          </p>
        </div>
        <img src={Benefits2} alt="" className="w-full md:w-1/2 order-first md:order-last" />
      </div>

      {/* --column3-- */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 mx-auto my-10 md:my-0 px-4 md:px-0">
        <img src={Benefits3} alt="" className="w-full md:w-1/2" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900">
            Avocado ipsum dolor <br />
            meat.
          </h1>
          <p className="w-full text-base md:text-lg">
            Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large
            large tomato fresh. Bianca personal roll pizza meat meatball.
            Meatball ranch hand lasagna anchovies. Platter beef thin burnt
            chicken pesto pesto anchovies garlic broccoli.
          </p>
        </div>
      </div>
    </div>
  );
};

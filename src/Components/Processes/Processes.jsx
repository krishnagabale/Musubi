import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Process1 from "../../assets/Benefits2.png";
import Process2 from "../../assets/Benefits3.png";
import { AccordinoPage } from "../AccordinoPage";


export const Process = () => {
  return (
    <>
      <Header />
      <div className="mt-24  md:w-full">
        <h1 className="font-bold text-lg md:text-xl text-center items-center justify-center">
          --Agricultural Process--
        </h1>

        <h1 className="my-5 font-bold text-5xl md:text-5xl text-green-900 justify-center text-center items-center">
          Avocado ipsum dolor meat
        </h1>
        <p className="w-full p-2 md:p-0 md:w-3/5 md:mx-auto justify-center text-center items-center mx-auto">
          Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large large
          tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch
          hand lasagna anchovies. Platter beef thin burnt chicken pesto pesto
          anchovies garlic broccoli. Mushrooms bacon party anchovies large beef
          buffalo style tomatoes.
        </p>
        <div className="flex justify-center items-center mt-5 gap-5 md:gap-0">
          <button className=" text-gray-500 hover:text-white hover:bg-green-800 rounded-3xl text-lg md:text-xl px-3 md:px-6 py-2 mt-5 md:mt-8 md:m-6">
            For Retailers
          </button>
          <button className=" text-gray-500 hover:text-white hover:bg-green-800 rounded-3xl text-lg md:text-xl px-3 md:px-6 py-2 mt-5 md:mt-8 md:m-6">
            For Growers
          </button>
        </div>

        {/* --column2-- */}
        <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto my-10 md:my-0">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900">
              Avocado ipsum dolor <br />
              meat.
            </h1>
            {/* <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900">
            Avocado ipsum dolo meat.
          </h1> */}
            <p className="w-full">
              Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large
              large tomato fresh. Bianca personal roll pizza meat meatball.
              Meatball ranch hand lasagna anchovies. Platter beef thin burnt
              chicken pesto pesto anchovies garlic broccoli.
            </p>
          </div>
          <img
            src={Process1}
            alt=""
            className="w-3/4 md:w-full order-first md:order-last"
          ></img>
        </div>

          {/* --column3-- */}
      <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto my-10 md:my-12">
        <img src={Process2} alt="" className="w-3/4 md:w-full"></img>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900">
            Avocado ipsum dolor <br />
            meat.
          </h1>
          {/* <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900">
            Avocado ipsum dolo meat.
          </h1> */}
          <p className="w-full">
            Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large
            large tomato fresh. Bianca personal roll pizza meat meatball.
            Meatball ranch hand lasagna anchovies. Platter beef thin burnt
            chicken pesto pesto anchovies garlic broccoli.
          </p>
        </div>
      </div>
    
      </div>
        <AccordinoPage />

      <Footer />
    </>
  );
};

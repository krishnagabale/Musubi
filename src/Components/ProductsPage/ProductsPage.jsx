import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import Product1 from "../../assets/Product1.png";
import Product2 from "../../assets/Product2.png";
import Product3 from "../../assets/Product3.png";

// Replace with your actual background image path
import BackgroundImage from "../../assets/CardBox.png";
import NewSectionImage from "../../assets/OBJECTS.png";

export const ProductsPage = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-200 mt-10 pt-28 md:w-full">
        <h1 className="font-bold text-lg md:text-xl bg-gray-200 text-center items-center justify-center">
          Products--
        </h1>

        <h1 className="my-5 font-bold text-5xl md:text-5xl text-green-900 justify-center text-center items-center">
          Avocado ipsum dolor meat
        </h1>
        <p className="w-3/5 md:w-3/5 md:mx-auto justify-center text-center items-center mx-auto">
          Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large large
          tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch
          hand lasagna anchovies. Platter beef thin burnt chicken pesto pesto
          anchovies garlic broccoli. Mushrooms bacon party anchovies large beef
          buffalo style tomatoes.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center w-4/5 mx-14 md:mx-auto">
          <button className="mt-3 text-center text-xl rounded-xl py-2 px-2 text-gray-500 text-white-600 hover:bg-green-900 hover:text-white mr-10">
            Fresh Produce
          </button>

          <button className="mt-3 text-center text-xl rounded-xl py-2 px-2 text-gray-500 text-white-600 hover:bg-green-900 hover:text-white mr-10">
            Organic Products
          </button>

          <button className="mt-3 text-center text-xl rounded-xl py-2 px-2 text-gray-500 text-white-600 hover:bg-green-900 hover:text-white mr-10">
            Point of sale
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:p-5">
          <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-12 md:mx-auto m-5 gap-5 md:gap-0">
            {/* --column1-- */}
            <div className="max-w-sm rounded overflow-hidden mr-7 relative">
              <img className="w-full h-auto" src={Product1} alt="product1" />
              <div className="text-xl absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-5">
                Product Name
              </div>
            </div>

            {/* --column2-- */}
            <div className="max-w-sm rounded overflow-hidden mr-7 relative">
              <img className="w-full h-auto" src={Product2} alt="product2" />
              <div className="text-xl absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-5">
                Product Name
              </div>
            </div>

            {/* --column3-- */}
            <div className="max-w-sm rounded overflow-hidden mr-7 relative">
              <img className="w-full h-auto" src={Product3} alt="product3" />
              <div className="text-xl absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-5">
                Product Name
              </div>
            </div>
          </div>
        </div>
        <div className="bg-customGreen flex flex-col md:flex-row justify-between items-center mx-4 my-8 rounded-lg">
          {/* Image on the left */}
          <div className="text-white w-full md:w-1/2 md:pl-10 md:mx-20">
            <h2 className="text-3xl md:text-6xl font-bold">
              Avocado ipsum dolor meat lovers
            </h2>
            <p className="mt-2 text-lg md:mb-14">
              Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large
              large tomato fresh. Bianca personal roll pizza meat meatball.
              Meatball ranch hand lasagna anchovies.
            </p>
          </div>

          {/* Text on the right */}
          <div className="w-full md:w-4/5">
            <img
              src={NewSectionImage}
              alt="New Section"
              
            />
          </div>
        </div>
        {/* Section with background image */}
        <div
          className="p-10 md:w-4/5 md:mx-36 flex flex-col md:flex-row justify-between items-center mx-4 my-8 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <div className="text-white w-full md:w-1/2 md:pl-10 mt-10 md:mt-0">
            <h2 className="text-3xl md:text-6xl font-bold">
              Avocado ipsum dolor meat.
            </h2>
            <p className="mt-2 text-lg md:mb-14">
              Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large
              large tomato fresh. Bianca personal roll pizza meat meatball.
            </p>
          </div>
          {/* Form */}
          <form className="flex flex-col w-full md:w-2/5 space-y-4 mt-6 md:mt-0">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-b-2 border-white text-white px-4 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-b-2 border-white text-white px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="bg-transparent border-b-2 border-white text-white px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* New section with green background */}
        
      </div>

      <Footer />
    </>
  );
};

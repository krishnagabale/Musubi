import React from 'react'
import BackgroundImage from "../assets/CardBox.png";
export const ContactUsCard = () => {
    return (
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
    )
}
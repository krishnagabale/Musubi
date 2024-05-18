import React from "react";

export const ContactUs = () => {
  return (
    <div className="flex bg-green-800 relative w-screen h-full p-5">
      {/* Left side - Contact Us form */}
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="font-bold text-2xl md:text-6xl text-white mb-4">
          Contact Us
        </h1>
        <p className="text-white mb-4">Avocado ipsum dolor meat lovers buffalo. Cheese anchovies <br />large large tomato fresh.</p>
        <form className="flex flex-col items-center bg-green-800 rounded-lg p-8">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full border-b-2 border-white outline-none bg-transparent text-white placeholder-white mb-4"
          />
          <input
            type="Enter your email"
            placeholder="Email"
            className="w-full border-b-2 border-white outline-none bg-transparent text-white placeholder-white mb-4"
          />
          <textarea
            placeholder="Enter your Query"
            className="w-full border-b-2 border-white outline-none bg-transparent text-white placeholder-white mb-4"
            rows="4"
          ></textarea>
          <button className=" text-white border w-full px-4 py-2 rounded-3xl">
            Contact Us
          </button>
        </form>
      </div>

      {/* Right side - World map image */}
      <div className="w-1/2">
        {/* <img
          src="world_map_image.jpg" // Replace with your image source
          alt="World Map"
          className="w-full h-full object-cover"
        /> */}
      </div>
    </div>
  );
};

import React from "react";
import Sustain1 from "../assets/Sustainability1.png";



export const Sustainability = () => {
  const images = [
    { url: Sustain1, text: "Environmental Practices" },
    { url: Sustain1, text: "Social Responsibility" },
    { url: Sustain1, text: "Agricultural Practices" }
    // Add more image URLs and texts here
  ];
  return (
    <div className="bg-gray-200 mt-14 w-screen h-full">
        
      <h1 className="font-bold text-lg md:text-xl bg-gray-200 text-center items-center justify-center">
      --Sustainability & Best Practices--
      </h1>

      <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900 justify-center text-center items-center">
          Avocado ipsum dolor meat
          <br />
          lovers buffalo. Pan NY
        </h1>

      {/* --column1-- */}
      <div className="p-10 md:p-5 mx-auto">
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-green-950 rounded-3xl m-3 p-2 shadow-md"
            >
              <img src={image.url} alt="" className=" mb-4" />
              <p className="text-white m-2 mx-2">{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

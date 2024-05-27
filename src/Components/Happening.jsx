import React from "react";
import Happening1 from "../assets/Happening1.png";
import Happening2 from "../assets/Happening2.png";
import Happening3 from "../assets/Happening3.png";

export const Happening = () => {
  return (
    <div className="bg-gray-200 mt-10 w-screen h-full">
      <h1 className="font-bold text-lg md:text-xl bg-gray-200 text-center">
        --What's happening--
      </h1>

      <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900 text-center">
        Avocado ipsum dolor meat
        <br />
        lovers buffalo. Pan NY
      </h1>

      <div className="flex flex-col justify-center p-3 my-10 md:p-5">
        <div className="flex flex-wrap justify-center">
          {/* --column1-- */}
          <div className="max-w-sm rounded overflow-hidden m-3">
            <img
              className="w-full rounded-3xl"
              src={Happening1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">6 Dec 2023</p>
              <div className="font-bold text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur. Fermentum parturient vulputate rhoncus.
              </p>
            </div>
          </div>

          {/* --column2-- */}
          <div className="max-w-sm rounded overflow-hidden m-3">
            <img
              className="w-full rounded-3xl"
              src={Happening2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">6 Dec 2023</p>
              <div className="font-bold text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur. Fermentum parturient vulputate rhoncus.
              </p>
            </div>
          </div>

          {/* --column3-- */}
          <div className="max-w-sm rounded overflow-hidden m-3">
            <img
              className="w-full rounded-3xl"
              src={Happening3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">6 Dec 2023</p>
              <div className="font-bold text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur. Fermentum parturient vulputate rhoncus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

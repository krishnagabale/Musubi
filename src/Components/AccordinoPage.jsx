import React from "react";
import Accordion from "./Accordino/Accordion";
import worldcircle from "../assets/world.jpeg";

export const AccordinoPage = () => {
  const accordionData = [
    {
      title: "1,150,000 UGX in year 3 per acre",
      content:
        "Hass Avocado harvest is expected at start in year 3 after planting. The expected fruit output per tree is 20 kgs per acre, making a total output of 2,300 kgs per acre with a potential revenue of 1.1500,000 UGX per acre at a price of 500 UGX per kg",
    },
    {
      title: "2,300,000 UGX in Year 4 / acre",
      content:
        "Hass Avocado harvest is expected at start in year 3 after planting. The expected fruit output per tree is 20 kgs per acre, making a total output of 2,300 kgs per acre with a potential revenue of 1.1500,000 UGX per acre at a price of 500 UGX per kg",
    },
    {
      title: "4,600,000 UGX in Year 5 / acre",
      content:
        "Hass Avocado harvest is expected at start in year 3 after planting. The expected fruit output per tree is 20 kgs per acre, making a total output of 2,300 kgs per acre with a potential revenue of 1.1500,000 UGX per acre at a price of 500 UGX per kg",
    },
    {
      title: "9,200,000 UGX in Year 6 / acre",
      content:
        "Hass Avocado harvest is expected at start in year 3 after planting. The expected fruit output per tree is 20 kgs per acre, making a total output of 2,300 kgs per acre with a potential revenue of 1.1500,000 UGX per acre at a price of 500 UGX per kg",
    },
  ];
  return (
    <div className="bg-green-800 relative w-screen h-full p-5">
      <h1 className="font-bold text-lg md:text-xl text-center items-center justify-center text-white pt-10">
        --Benefits--
      </h1>
      <h1 className="my-5 font-bold md:text-5xl text-3xl text-white justify-center text-center items-center">
      Estimated Hass Avocado Returns<br /> per acre
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto w-4/5">
        <div className="pt-6 w-full md:w-1/2 md:p-4 text-center gap-7 rounded-2xl bg-green-800 mx-10">
          <img src={worldcircle} className="rounded-3xl md:mt-5" />
        </div>
        <div className="w-full md:w-1/2 mx-5 my-5">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title}>
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

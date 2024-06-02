import React from "react";
import AboutBanner from '../assets/AboutUs.png';

const AboutUsPage = () => {
  return (
    <div className="flex justify-center w-screen h-full bg-gray-200 md:my-10">
      <div className="w-full md:w-4/5 flex flex-col items-center p-3 md:p-0">
        <h1 className="my-5 md:my-5 font-bold text-lg md:text-xl">--About Us--</h1>
        <h1 className="font-bold text-3xl md:text-5xl text-green-900 text-center">
          Avocado ipsum dolor meat<br />
          lovers buffalo. Pan NY
        </h1>
        <p className="w-full my-5 md:w-3/4 text-center text-base md:text-lg">
          Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large
          tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch
          hand lasagna anchovies. Platter beef thin burnt chicken pesto pesto
          anchovies garlic broccoli. Mushrooms bacon party anchovies large beef
          buffalo style tomatoes. Beef pepperoni bell NY peppers Bianca bacon
          mayo. Ham lovers crust crust fresh thin roll beef bell. Wing.
        </p>
        <img src={AboutBanner} className="my-5 w-full h-56 md:h-auto md:w-auto"/>
      </div>
    </div>
  );
};

export default AboutUsPage;

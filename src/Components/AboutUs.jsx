import React from "react";
import AboutBanner from '../assets/AboutUs.png'


const AboutUsPage = () => {
  return (
    <div className="flex justify-center w-screen h-full bg-gray-200 mt-10">
      <div className="w-4/5 flex flex-col items-center">
        <h1 className="my-10 font-bold text-xl">--About Us--</h1>
        <h1 className="font-bold text-5xl text-green-900">
          Avocado ipsum dolor meat
          <br />
          lovers buffalo. Pan NY
        </h1>
        <p className="w-full my-5 md:w-3/4 text-center">
          Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large
          tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch
          hand lasagna anchovies. Platter beef thin burnt chicken pesto pesto
          anchovies garlic broccoli. Mushrooms bacon party anchovies large beef
          buffalo style tomatoes. Beef pepperoni bell NY peppers Bianca bacon
          mayo. Ham lovers crust crust fresh thin roll beef bell. Wing.
        </p>
        <img src={AboutBanner} className="my-5"/>
      </div>
    </div>
  );
};

export default AboutUsPage;

import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AboutUsPageImg from "../../assets/AboutUsPageimg.png";
import background from "../../assets/CardBox.png";
import RightSideImage from "../../assets/aboutus1.png"; // Replace with the actual image path
import Sustain1 from "../../assets/Sustainability1.png";
import DevonLane from '../../assets/DevonLane.png'

export const AboutUsPage = () => {
  const images = [
    {
      url: Sustain1,
      text: "Environmental Practices",
      subtitle:
        "Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies. Platter beef thin burnt chicken pesto pesto anchovies garlic broccoli",
    },
    {
      url: Sustain1,
      text: "Social Responsibility",
      subtitle:
        "Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies. Platter beef thin burnt chicken pesto pesto anchovies garlic broccoli",
    },
    { url: Sustain1, text: "Agricultural Practices", subtitle: "Subtitle 3" },
    // Add more image URLs, titles, and subtitles here
  ];

  const employeimg = [
    {
      url: DevonLane,
      text: "Environmental Practices",
      subtitle:
        "",
    },
  ]


  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Header />
      <div className="relative md:my-36">
        <img
          src={AboutUsPageImg}
          alt="about"
          className="w-full md:w-auto md:mx-36"
        />
        <div className="absolute inset-0 flex flex-col justify-start md:my-16 items-center text-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold">
            Avocado ipsum dolor meat
          </h1>
          <p className="text-lg md:text-md mt-2 md:mt-4 md:w-4/5 md:pr-16 md:pl-8">
            Avocado ipsum dolor meat lovers buffalo. Cheese anchovies large
            large tomato fresh. Bianca personal roll pizza meat meatball.
            Meatball ranch hand lasagna anchovies. Platter beef thin burnt
            chicken pesto pesto anchovies garlic broccoli. Mushrooms bacon party
            anchovies large beef buffalo style tomatoes.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start my-20 p-10 rounded-lg">
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={RightSideImage}
            alt="Right side content"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/5 text-center md:text-left md:pr-10">
          <h2 className="text-3xl md:text-6xl font-bold text-green-900">
            Avocado ipsum dolor meat lovers
          </h2>
          <p className="mt-4 text-lg md:text-md">
            Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large
            tomato fresh. Bianca personal roll pizza meat meatball. Meatball
            ranch hand lasagna anchovies.
          </p>
          <ul className="list-disc list-inside mt-4 text-lg md:text-md">
            <li>
              Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large
              large tomato fresh.
            </li>
            <li>
              Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large
              large tomato fresh.
            </li>
            <li>
              Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large
              large tomato fresh.
            </li>
          </ul>
        </div>
      </div>
      <div className="p-10 md:p-5 mx-auto">
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-green-950 rounded-3xl m-3 p-2 shadow-md overflow-hidden relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt=""
                className={`mb-4 transition-all duration-300 transform hover:scale-130 ${
                  hoveredIndex === index ? "h-30" : ""
                }`}
              />
              {hoveredIndex === index && (
                <div
                  className="absolute bottom-0 left-0 right-0 bg-green-950 text-white p-4"
                  style={{ height: "40%" }}
                >
                  <h3 className="text-xl font-bold">{image.text}</h3>
                  <p className="text-sm mt-2">{image.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
            <div className="mt-10 w-screen h-full">
        <h1 className="font-bold text-lg md:text-xl text-center items-center justify-center">
          --Our Products--
        </h1>

        <h1 className="my-5 font-bold text-3xl md:text-5xl text-green-900 justify-center text-center items-center">
          Avocado ipsum dolor meat
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto gap-5 md:gap-0">
          {/* --column1-- */}
          <div className="max-w-sm mx-4 rounded overflow-hidden mr-4">
            <img
              class="w-full"
              src={DevonLane}
              alt="Sunset in the mountains"
            />
             <div className="px-2">
              <h1 className="font-bold text-xl mb-2">Lorem ipsum </h1>
              <p className="text-gray-700 text-base">
              CTO(Founder)
              </p>
            </div>
            
          </div>

          {/* --column2-- */}
          <div className="max-w-sm mx-4 rounded overflow-hidden mr-4">
            <img
              className="w-full rounded-3xl"
              src={DevonLane}
              alt="Sunset in the mountains"
            />
             <div className="px-2">
              <h1 className="font-bold text-xl mb-2">Lorem ipsum </h1>
              <p className="text-gray-700 text-base">
              CTO(Founder)
              </p>
            </div>
            
          </div>

          {/* --column3-- */}
          <div className="max-w-sm mx-4 rounded overflow-hidden mr-4">
            <img
              className="w-full rounded-3xl"
              src={DevonLane}
              alt="Sunset in the mountains"
            />
            <div className="px-2">
              <h1 className="font-bold text-xl mb-2">Lorem ipsum </h1>
              <p className="text-gray-700 text-base">
              CTO(Founder)
              </p>
            </div>
            
          </div>
          <div className="max-w-sm mx-4 rounded overflow-hidden mr-4">
            <img
              className="w-full rounded-3xl"
              src={DevonLane}
              alt="Sunset in the mountains"
            />
            <div className="px-2">
              <h1 className="font-bold text-xl mb-2">Lorem ipsum </h1>
              <p className="text-gray-700 text-base">
              CTO(Founder)
              </p>
            </div>
            
          </div>

        </div>
      </div>
      <div
        className="p-10 md:w-4/5 md:mx-36 flex flex-col md:flex-row justify-between items-center mx-4 my-8 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-white w-full md:w-1/2 md:pl-10 mt-10 md:mt-0">
          <h2 className="text-3xl md:text-6xl font-bold">
            Avocado ipsum dolor meat.
          </h2>
          <p className="mt-2 text-lg md:mb-14">
            Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large
            tomato fresh. Bianca personal roll pizza meat meatball.
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
      <Footer />
    </>
  );
};

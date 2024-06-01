import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product1 from "../assets/Product_1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing FontAwesome icons
import { useMediaQuery } from 'react-responsive';

export const Products = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-500 bg-opacity-50 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full hover:bg-opacity-75`} // Improved styling for hover effect
        style={{ ...style }}
        onClick={onClick}
      >
        <FaArrowRight className="text-white text-xl" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-500 bg-opacity-50 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full hover:bg-opacity-75`} // Improved styling for hover effect
        style={{ ...style }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-white text-xl" />
      </div>
    );
  };

  const slides = [
    {
      id: 1,
      image: Product1,
      title: "01 Our Avocado Trees",
      subtitle:
        "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
    },
    {
      id: 2,
      image: Product1,
      title: "01 Our Avocado Trees",
      subtitle:
        "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
    },
    {
      id: 3,
      image: Product1,
      title: "01 Our Avocado Trees",
      subtitle:
        "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
    },
    // Add more slides as needed
  ];

  const settings = {
    className: "slider variable-width",
    dots: false, // Hide dots indicator for cleaner look
    arrows: true, // Enable navigation arrows
    infinite: false, // Disable infinite looping
    slidesToScroll: 1, // Transition one slide at a time
    slidesToShow: isMobile ? 1 : 1.25,
  };

  return (
    <div className="bg-gray-200 relative w-screen h-full">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="pt-6 w-full md:w-1/2 p-4 text-center md:text-left gap-7">
          <h1 className="my-5 mx-4 md:mx-20 font-bold text-3xl md:text-5xl text-green-900">
            Avocado ipsum dolor meat lovers buffalo. Pan NY.
          </h1>
        </div>
        <div className="w-full md:w-1/2 mx-4 md:mx-10 relative">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="p-2">
                <div className="bg-gray-200 md:p-4 p-4 rounded-3xl border-gray-500 border-2">
                  <img src={slide.image} alt="" />
                  <h2 className="text-xl md:text-3xl mt-4 font-bold text-green-900">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-green-900">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="absolute left-1/2 -bottom-6 md:mx-80">
        <PrevArrow className="text-white" />
        <NextArrow className="text-white" />
      </div>
    </div>
  );
};

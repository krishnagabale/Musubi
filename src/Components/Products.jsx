import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benefits2 from "../assets/Benefits2.png";
import Product1 from '../assets/Product_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from "./Accordino/Accordion";
export const Products = () => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        );
      };
      
      const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        );
      };
      
  const slides = [
    {
      id: 1,
      image: Product1,
      title: "01  Our Avocado Trees",
      subtitle: "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
    },
    {
      id: 2,
      image: Product1,
      title: "01  Our Avocado Trees",
      subtitle: "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
    },
    {
        id: 3,
        image: Product1,
        title: "01  Our Avocado Trees",
        subtitle: "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
      },
      {
        id: 4,
        image: Product1,
        title: "01  Our Avocado Trees",
        subtitle: "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
      },
      {
        id: 5,
        image: Product1,
        title: "01  Our Avocado Trees",
        subtitle: "Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.",
      },
  ];

  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: true, 
    prevArrow: <PrevArrow />, // Custom component for previous arrow
    nextArrow: <NextArrow />, // Custom component for next arrow
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1.25,
  };

  return (
    <div className="bg-gray-200 mt-12 w-screen h-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto">
      <div className="pt-6 md:p-8 text-center md:text-left">
          <h1 className="my-5  font-bold text-5xl text-green-900">
          Avocado ipsum dolor meat lovers buffalo. Pan NY.
          </h1>
        </div>
        <div className="w-3/5 mx-10 p-4">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="p-4">
                
                <div className="bg-gray-200 p-8 rounded-3xl border-gray-500 border-2">
                  <img src={slide.image} alt="" />
                  <h2 className="text-3xl font-bold text-green-900">{slide.title}</h2>
                  <p className="text-sm text-green-900">{slide.subtitle}</p>
                  
                </div>
                
              </div>
            ))}
          </Slider>
          </div>
      </div>
      <div className="mt-4">
          <Accordion title="Accordion 3">
            Content for Accordion 3
          </Accordion>
        </div>
    </div>
  );
};

import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Map from "../assets/OBJECTS.png"; // Ensure the correct path to your image

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://thehonestco.in/texol/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully");
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        // Handle error
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col bg-customGreen relative pt-28 md:flex-row">
        {/* Left side - Contact Us form */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-8 flex-grow md:pl-36">
          <h1 className="font-bold text-3xl md:text-6xl text-white mb-4 text-start">
            Contact Us
          </h1>
          <p className="text-white mb-4 text-start">
            Avocado ipsum dolor meat lovers buffalo. Cheese anchovies
            <br />
            large large tomato fresh.
          </p>
          <form className="flex flex-col w-full md:w-3/5 space-y-4 mt-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className={`bg-transparent border-b-2 border-white text-white px-4 py-2 focus:outline-none ${formData.name && 'bg-green-800'}`}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className={`bg-transparent border-b-2 border-white text-white px-4 py-2 focus:outline-none ${formData.email && 'bg-green-800'}`}
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="message"
              placeholder="Enter Your Message"
              className={`bg-transparent border-b-2 border-white text-white px-4 py-2 focus:outline-none ${formData.message && 'bg-green-800'}`}
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side - World map image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={Map}
            alt="World Map"
            className="w-full h-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-green-950 rounded-2xl mb-4 ${isOpen ? 'bg-green-900 border-none' : 'bg-green-800 border'} relative z-10`}>
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-md font-semibold text-white">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color: "white" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          />
        </svg>
      </div>
      {/* Accordion Content */}
      {isOpen && (
        <div className="p-2 text-xs text-white font-extralight">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;

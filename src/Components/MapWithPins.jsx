import React, { useState } from "react";
import MapImage from '../assets/Group.png'; // Ensure the correct path to your map image
import PinIcon from '../assets/map-pin.png'; // Ensure the correct path to your pin icon
import MarCard from '../assets/Card2.png'

const MapWithPins = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: 1, x: '30%', y: '40%', title: 'Location 1', image: {MarCard} },
    { id: 2, x: '60%', y: '70%', title: 'Location 2', image: {MarCard} },
    { id: 3, x: '61%', y: '75%', title: 'Location 3', image: {MarCard} },
    { id: 4, x: '40%', y: '20%', title: 'Location 1', image: {MarCard} },
    { id: 5, x: '20%', y: '20%', title: 'Location 1', image: {MarCard} },
    { id: 6, x: '50%', y: '20%', title: 'Location 1', image: {MarCard} },
    // Add more locations as needed
  ];

  const handlePinClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative bg-customGreen w-full h-full">
      <img src={MapImage} alt="Map" className="w-full h-auto" />
      {locations.map(location => (
        <img
          key={location.id}
          src={PinIcon}
          alt="Pin"
          className="absolute cursor-pointer"
          style={{ left: location.x, top: location.y }}
          onClick={() => handlePinClick(location)}
        />
      ))}
      {selectedLocation && (
        <div className="absolute bg-white rounded-2xl shadow-lg" style={{ left: selectedLocation.x, top: `calc(${selectedLocation.y} - 150px)` }}>
          <img src={MarCard} alt={selectedLocation.title} className="w-72 h-30 object-cover mb-2 rounded-xl" />
          <h3 className="text-xl font-bold mb-2 mx-4">{selectedLocation.title}</h3>
          <h3 className="text-md mb-2 mx-4">Lorem ipsum</h3>
        </div>
      )}
    </div>
  );
};

export default MapWithPins;

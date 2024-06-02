import React, { useState } from "react";
import MapImage from '../assets/worldmap-removebg.png'; // Ensure the correct path to your map image
import PinIcon from '../assets/map-pin.png'; // Ensure the correct path to your pin icon
import MarCard from '../assets/Card2.png';

const MapWithPins = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: 1, x: '30%', y: '40%', title: 'Location 1', subtitle: 'Subtitle 1', image: MarCard },
    { id: 2, x: '60%', y: '70%', title: 'Location 2', subtitle: 'Subtitle 2', image: MarCard },
    { id: 3, x: '61%', y: '75%', title: 'Location 3', subtitle: 'Subtitle 3', image: MarCard },
    { id: 4, x: '40%', y: '20%', title: 'Location 4', subtitle: 'Subtitle 4', image: MarCard },
    { id: 5, x: '20%', y: '20%', title: 'Location 5', subtitle: 'Subtitle 5', image: MarCard },
    { id: 6, x: '50%', y: '20%', title: 'Location 6', subtitle: 'Subtitle 6', image: MarCard },
    { id: 7, x: '55%', y: '40%', title: 'Location 7', subtitle: 'Subtitle 7', image: MarCard },
    { id: 8, x: '70%', y: '25%', title: 'Location 8', subtitle: 'Subtitle 8', image: MarCard },
    { id: 9, x: '50%', y: '20%', title: 'Location 9', subtitle: 'Subtitle 9', image: MarCard },
    { id: 10, x: '18%', y: '40%', title: 'Location 10', subtitle: 'Subtitle 10', image: MarCard },
    { id: 11, x: '50%', y: '20%', title: 'Location 11', subtitle: 'Subtitle 11', image: MarCard },
    { id: 12, x: '70%', y: '70%', title: 'Location 12', subtitle: 'Subtitle 12', image: MarCard },
    { id: 13, x: '70%', y: '64%', title: 'Location 13', subtitle: 'Subtitle 13', image: MarCard },
    { id: 14, x: '75%', y: '60%', title: 'Location 14', subtitle: 'Subtitle 14', image: MarCard },
    { id: 15, x: '20%', y: '61%', title: 'Location 15', subtitle: 'Subtitle 15', image: MarCard },
    { id: 16, x: '22%', y: '58%', title: 'Location 16', subtitle: 'Subtitle 16', image: MarCard },
    { id: 17, x: '20%', y: '51%', title: 'Location 17', subtitle: 'Subtitle 17', image: MarCard },
    { id: 18, x: '55%', y: '64%', title: 'Location 18', subtitle: 'Subtitle 18', image: MarCard },
    { id: 19, x: '52%', y: '68%', title: 'Location 19', subtitle: 'Subtitle 19', image: MarCard },
    { id: 20, x: '53%', y: '72%', title: 'Location 20', subtitle: 'Subtitle 20', image: MarCard },
    { id: 21, x: '54%', y: '82%', title: 'Location 21', subtitle: 'Subtitle 21', image: MarCard },
    { id: 22, x: '54%', y: '67%', title: 'Location 22', subtitle: 'Subtitle 22', image: MarCard },
  ];

  const handlePinClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative w-full h-full bg-customGreen">
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        {/* Title and Subtitle */}
        <div className="text-center mb-8 md:w-3/5">
          <h1 className="text-3xl md:text-5xl font-bold text-white md:mt-14">Avocado ipsum dolor meat lovers</h1>
          <p className="text-md md:text-md text-white md:mt-4">Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large large tomato fresh. Bianca personal roll pizza meat meatball. Meatball ranch hand lasagna anchovies.</p>
        </div>

        {/* Map and Pins */}
        <div className="relative">
          <img src={MapImage} alt="Map" className="w-full h-auto" style={{ maxWidth: '100%', height: 'auto' }} />
          <div className="absolute inset-0 bg-customGreen opacity-50"></div>
        </div>
        {locations.map(location => (
          <img
            key={location.id}
            src={PinIcon}
            alt="Pin"
            className="absolute cursor-pointer"
            style={{ left: location.x, top: location.y, width: '30px', height: 'auto' }}
            onClick={() => handlePinClick(location)}
          />
        ))}
        {selectedLocation && (
          <div className="absolute md:w-1/5 w-1/3 bg-white rounded-2xl shadow-lg"
            style={{ left: selectedLocation.x, top: `calc(${selectedLocation.y} - 150px)` }}>
            <img
              src={selectedLocation.image}
              alt={selectedLocation.title}
              className="w-15 h-15 rounded-t-lg border-gray-400" 
            />
            <h3 className="text-xl font-bold mb-2 mx-2">{selectedLocation.title}</h3>
            <p className="text-md mb-2 mx-2">{selectedLocation.subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapWithPins;

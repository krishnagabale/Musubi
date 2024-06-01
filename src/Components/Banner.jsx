import React from 'react';
import Header from './Header';
import BannerVideo from '../assets/Musubi Banner.mp4';

const Banner = () => {
    return (
        <>
            <Header />
            <div className="relative w-full h-screen mt-28 md:mt-0 overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src={BannerVideo} type="video/mp4" />
                    {/* Add additional source tags for different video formats if needed */}
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-2xl md:text-5xl font-bold text-center px-4">
                       Experience the Freshest<br/>
                       avocado Delights
                    </h1>
                </div>
                <div className="absolute inset-0 bg-transparentDotPattern pointer-events-none"></div>
            </div>
        </>
    );
};

export default Banner;

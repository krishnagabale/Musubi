import React from 'react'
import Bannerimg from '../assets/Banner.png'
import Header from './Header';

const Banner = () => {
    return(
        <>
       
        <div className="relative w-screen">
        <Header />
        {/* <img src={Bannerimg} className="w-full" alt="banner" /> */}
        <video className="w-full" autoPlay loop muted>
                    <source src={`https://ecofarmsavocados.com/wp-content/uploads/2022/03/MOV-002-002-EcoFarms.mp4`} type="video/mp4" />
                    {/* Add additional source tags for different video formats if needed */}
                    Your browser does not support the video tag.
                </video>
        </div>
        </>

    )
}

export default Banner;
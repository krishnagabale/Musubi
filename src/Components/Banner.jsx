import React from 'react'
import Bannerimg from '../assets/Banner.png'
import Header from './Header';

const Banner = () => {
    return(
        <>
       
        <div className="relative w-screen">
        <Header />
        <img src={Bannerimg} className="w-full" alt="banner" />
            
        </div>
        </>

    )
}

export default Banner;
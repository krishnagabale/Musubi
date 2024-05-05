import React from 'react'
import logo from '../assets/logo.png'
import Bannerimg from '../assets/Banner.png'
const Header = () => {
    return (
        <>
          <div className="bg-cover bg-center relative" style={{backgroundImage: `url(${Bannerimg})`}}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="flex glass justify-between items-center px-4 py-2 absolute top-0 left-0 w-full">
                <img className="w-36 cursor-pointer" src={logo} alt="logo" />
                <ul className="flex items-center gap-8 text-black">
                    <li><a href="#">Media</a></li>
                    <li><a href="#">For Growers</a></li>
                    <li><a href="#">Retailers</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 rounded-lg text-sm px-5 py-2">Contact Us</button>
            </div>
        </div>
           
        </>

    )
}

export default Header;
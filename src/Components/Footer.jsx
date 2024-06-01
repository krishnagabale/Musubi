import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import logo from '../assets/musubilogo.png'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src={logo} />
        <p className='py-4 text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={24} />
            <FaInstagram size={24} />
            <FaTwitterSquare size={24} />
            <FaGithubSquare size={24} />
            <FaDribbbleSquare size={24} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-black'>Products</h6>
        <ul>
            <li className='py-2 text-sm text-black'>Fresh Products</li>
            <li className='py-2 text-sm text-black'>Organic Products</li>
            <li className='py-2 text-sm text-black'>Packaging Options</li>
            <li className='py-2 text-sm text-black'>Availability Calendar</li>
        </ul>

        <h6 className='font-medium text-black mt-10'>Retailers</h6>
        <ul>
            <li className='py-2 text-sm text-black'>Product Catalogue</li>
            <li className='py-2 text-sm text-black'>Partnerships</li>
            <li className='py-2 text-sm text-black'>Ponit of Sale Support</li>
            <li className='py-2 text-sm text-black'>Sales Team</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Media</h6>
        <ul>
            <li className='py-2 text-sm text-black'>Press Releases</li>
            <li className='py-2 text-sm text-black'>News & Updates</li>
            <li className='py-2 text-sm text-black'>Media Contact</li>
        </ul>
        <h6 className='font-medium text-black mt-10'>About Us</h6>
        <ul>
            <li className='py-2 text-sm text-black'>Our Company</li>
            <li className='py-2 text-sm text-black'>History</li>
            <li className='py-2 text-sm text-black'>Mission Values & Goals</li>
            <li className='py-2 text-sm text-black'>Team</li>
            <li className='py-2 text-sm text-black'>Certifications & Awards</li>
        </ul>
    </div>
    
    <div>
        <h6 className='font-medium text-black'>Sustainability</h6>
        <ul>
            <li className='py-2 text-sm text-black'>Environmental Practices</li>
            <li className='py-2 text-sm text-black'>Social Responsibility</li>
            <li className='py-2 text-sm text-black'>Community Engagement</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
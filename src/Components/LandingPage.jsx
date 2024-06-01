import React,{useEffect} from 'react'
import Banner from '../Components/Banner'
import AboutUsPage from '../Components/AboutUs'
import Footer from '../Components/Footer'
import { Benefits } from '../Components/Benefits'
import { Sustainability } from '../Components/Sustainability'
import { Happening } from '../Components/Happening'
import MapWithPopups from '../Components/MapWithPopups' 
import { Products } from '../Components/Products'
import { OurProducts } from '../Components/OurProducts'
import { AccordinoPage } from '../Components/AccordinoPage'
import { Parntners } from '../Components/Parntners'
import MapWithPins from './MapWithPins'
import { ContactUs } from './ContactUs'
import { ContactUsCard } from './ContactUsCard'

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className="bg-gray-200 w-full overflow-hidden">
        {/* <Header /> */}
        <Banner />
       
        <AboutUsPage/>
        <Benefits/>
        <Products />
        <Sustainability/>
        <MapWithPins />
        <OurProducts/>
        <Happening/>
        
        <AccordinoPage />
        
        <Parntners />
        <ContactUsCard/>
        
        {/* <MapWithPopups /> */}
        <Footer/>
      </div>
    )
}
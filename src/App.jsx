import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import AboutUsPage from './Components/AboutUs'
import Footer from './Components/Footer'
import { Benfits } from './Components/Benefits'
import { Sustainability } from './Components/Sustainability'
import { Happening } from './Components/Happening'
import MapWithPopups from './Components/MapWithPopups'
import { Products } from './Components/Products'

function App() {

  return (
    <div className="bg-gray-200 w-full overflow-hidden">
      {/* <Header /> */}
      <Banner />
      <AboutUsPage/>
      <Benfits/>
      <Sustainability/>
      <Products />
      <Happening/>
      <MapWithPopups />
      <Footer/>
    </div>
  )
}

export default App

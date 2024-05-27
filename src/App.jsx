import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from './Components/LandingPage'
import { ContactUs } from './Components/ContactUs'
import { ProductsPage } from './Components/ProductsPage/ProductsPage'
import {AboutUsPage} from './Components/AboutUsPage/AboutUsPage'
import { Process } from './Components/Processes/Processes'

function App() {

  return (
    <Router>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/products" element={<ProductsPage/>} />
     <Route path="/aboutus" element={<AboutUsPage />} />

    {/* {/* <Route path="/FindStation" element={<FindStation />} /> */}
    <Route path="/processes" element={<Process />} />   
    <Route path="/contactus" element={<ContactUs/>} />

    </Routes>
    </Router>
  )
}

export default App

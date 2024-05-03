import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import AboutUsPage from './Components/AboutUs'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* <Header /> */}
      <Banner />
      <AboutUsPage/>
      <Footer/>
    </div>
  )
}

export default App

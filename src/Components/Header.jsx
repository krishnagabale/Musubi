import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { Link ,useNavigate} from "react-router-dom";
import Bannerimg from '../assets/Banner.png'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const navigate = useNavigate();
    const handleContactUsClick = () => {
        navigate("/contactus");
      };
  
    return (
      <nav className="glass fixed w-full z-20 top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to='/'
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-28" alt="Texol Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={handleContactUsClick}
              type="button"
              className="text-white  bg-customGreen hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-md px-4 py-2 text-center dark:bg-green-700 dark:hover:bg-green-700 dark:focus:ring-green-700"
            >
              Contact Us
            </button>
            <button
              onClick={handleToggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              menuOpen ? "flex" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-grey rounded md:bg-transparent text-lg"
                  aria-current="page"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-grey rounded md:bg-transparent text-lg"
                >
                  For Growers
                </a>
              </li>
              <li>
                <Link
                  to="/processes"
                  className="block py-2 px-3 text-grey rounded md:bg-transparent text-lg"
                >
                  Processes
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-grey rounded md:bg-transparent text-lg"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <Link
                  to='/products'
                  className="block py-2 px-3 text-grey rounded md:bg-transparent text-lg"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to='/aboutus'
                  className="block py-2 px-3 text-grey rounded md:bg-transparent text-lg"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;
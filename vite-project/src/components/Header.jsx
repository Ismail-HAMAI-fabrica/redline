import React, { useEffect, useState } from 'react';
import 'tw-elements';
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 50; // Adjust this value to determine when the background color should change

      setScrolling(scrollTop > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 boreder transition-all rounded-b-full pt-3 max-w-full w-[100%] px-14 mx-auto ${
          scrolling ? 'bg-gray-800' : 'bg-transparent'
        }`}
      >
        <nav className="bg-transparent">
          <div className="bg-transparent container mx-auto flex items-center  justify-evenly">
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#"
                    className="md:bg-transparent font-bold text-white block pl-3 pr-4 py-2 md:text-[#219EBC] md:p-0 rounded focus:text-[#219EBC] text-lg"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-lg hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-[#219EBC] md:p-0"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-lg hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-[#219EBC] md:p-0"
                  >
                    Pricing
                  </a>
                </li>
               
              </ul>
            </div>
       
            <a href="#" className="flex-1  text-center">
                <span className="self-center text-[#FB8500] text-5xl font-semibold whitespace-nowrap">
                  T<span className="text-[#219EBC]">C</span>
                </span>
                
              </a>
              <button onClick={() => navigate('/signIn')} className="nav-button flex flex-row  items-center cta">
                <span className="hover-underline-animation"> Sign-UP </span>
                <svg className='fill-white -mt-2' viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
              </button>
              
            
          </div>
        </nav>
      </div>
    </>
  );
}

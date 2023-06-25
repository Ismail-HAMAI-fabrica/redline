import React, { useEffect, useState } from 'react';
import 'tw-elements';
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const token = localStorage.getItem('token');

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <>
      <div
        className={`fixed z-50 boreder transition-all rounded-b-full  max-w-full w-[100%] px-14 mx-auto ${
          scrolling ? 'bg-gray-800' : 'bg-transparent'
        }`}
      >
        <nav className="bg-transparent">
          <div className="bg-transparent container mx-auto flex items-center justify-between">
            <div>
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
                  {/* Menu icon paths */}
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Close icon paths */}
                </svg>
              </button>
              <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                <ul className=" justify-center md:justify-end flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
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
            </div>

            <a href="#" className="flex justify-center items-center">
              <img src="/TClogo.svg" className="w-20 mr-[7.4rem]" alt="" />
            </a>

            {token ? (
              <button onClick={handleLogout} className="nav-button flex flex-row items-center cta">
                <span className="hover-underline-animation">Logout</span>
                <svg className="fill-white -mt-2" viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
              </button>
            ) : (
              <button onClick={() => navigate('/signIn')} className="nav-button flex flex-row items-center cta">
                <span className="hover-underline-animation">Sign-UP</span>
                <svg className="fill-white -mt-2" viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
              </button>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

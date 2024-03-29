import React, { useEffect, useState } from 'react';
import 'tw-elements';
import { useNavigate , Link} from "react-router-dom";

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
          <div className="bg-transparent  mx-auto flex items-center justify-between">
            <div>
              
              <div className=" sm  w-full md:w-auto" id="mobile-menu">
                <ul className=" justify-center md:justify-end  flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                  <li className='cta '>
                    <Link
                      to='/'
                      className=" md:bg-transparent hover-underline-animation font-bold text-white block pl-3 pr-4   md:p-0 rounded  text-lg"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className='cta '>
                  <Link
                    to="/gallery"
                    className="text-white text-lg hover-underline-animation hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4   md:p-0"
                  >
                    Gallery
                  </Link>
                  </li>
              
                </ul>
              </div>
            </div>

            <a href="#" className="flex justify-center items-center">
              <img src="/TClogo.svg" className="w-8 py-1 sm:w-10 md:w-14 ml-20 md:mr-24 lg:mr-48" alt="" />
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

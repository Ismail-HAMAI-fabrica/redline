import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,  } from 'react-router-dom';
import Animated from './Animatedobjsct';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      if (response && response.data) {
        const { username, token, role } = response.data;

        // Save the token to local storage for persistent authentication
        localStorage.setItem('token', token);

        // Redirect the user based on their role
        if (role === 'admin') {
          navigate('/dashboard');
        } else if (role === 'customer') {
          navigate('/');
        } else {
          console.error('Invalid role:', role);
        }
      } else {
        console.error('Login error: Invalid response format');
      }
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className="bg-[#023047] flex flex-col justify-center gap-y-10 overflow-hidden ">
    <div className="flex justify-between px-9 -ml-6 mt-5 items-center">
    <button onClick={() => navigate('/')} className="btn -ml-24 flex-1">
    <svg className='fill-white  rounded-full w-11 hover:fill-[#FFB703]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    </button>
   <img src="/TClogo.svg" className='h-32 -mt-3  flex-1 text-center' />
   <button onClick={() => navigate('/signIn')} className="nav-button flex-1 flex justify-end flex-row   items-center cta">
        <span className="hover-underline-animation"> Sighn-IN </span>
        <svg className='fill-white -mt-2' viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        </svg>
      </button>
   </div>
      <form onSubmit={handleFormSubmit}>
      <section className=' relative block  lg:pt-0 bg-[#023047]'>
           <div className="container mx-auto px-4">
                          <div className="flex flex-wrap justify-items-stretch  ">
                            <div className=" pt-6 flex flex-wrap justify-between w-full ">
                            <Animated/>
                              <div className="relative bg-white flex flex-col mr-16  break-words w-[400px] mb-6 shadow-lg rounded-lg bg-blueGray-200">
                              <div className="flex-auto w-[100%]  p-5  ">
                                 <div className="relative mb-3 mt-8">
                                      <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2' >Username:</label>
                                       <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="text" autoComplete='null' value={username} autoCapitalize='null' onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                                <div className="relative w-full mb-3 mt-8">
                                  <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Password:</label>
                                  <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="text-center mt-11">
                                      <button className='bg-[#023047] text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"' type="submit">Loge-IN</button>
                                    </div>
                              </div>
              </div>   
            </div>   
          </div>    
        </div>    
                   
      </section>
      </form>
    </div>
  );
}

export default Login;

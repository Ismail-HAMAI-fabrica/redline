import React, {  useState } from 'react';
import axios from 'axios';
import Animated from './Animatedobjsct';




function Reg() {

 


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonnumber, setPhonnumber] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [username, setUsername] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    try {
      const response = await axios.post('http://localhost:3000/api/auth/reg', {
        email,
        password,
        phonnumber,
        localisation,
        username,
      });

      const { email: registeredEmail, token } = response.data;
      console.log('Registered email:', registeredEmail);
      console.log('Token:', token);
      // Perform any necessary actions after successful registration
    } catch (error) {
      console.error('Registration error:', error.response.data);
    }
  };

  return (
    <>
           <div className="bg-[#023047] flex flex-col items-center">
           <img src="/TClogo.svg" className='h-40 items-center' />
           <p className='text-lg text-center px-16 text-white'>Thank you for choosing the Food App. Get ready to savor unforgettable flavors and embark on a gastronomic journey like no other!</p>
                  <form onSubmit={handleSubmit}>
                  
                    
                    <section className=' relative block  lg:pt-0 bg-[#023047]'>
                   
                      <div className="container mx-auto px-4">
                          <div className="flex justify-items-stretch gap-9 w-[100%] ">
                            <div className=" pt-6 flex flex-row justify-center items-center gap-18 lg:w-[100%]">
                            <Animated/>
                              <div className="relative bg-white flex flex-col min-w-0 break-words w-[100%] mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                <div className="flex-auto w-[100%] p-5 ">
                                  <h4 className="text-2xl font-semibold">Registration Form</h4>
                                <div className="relative w-full mb-3 mt-8">
                                  <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Username:</label>
                                  <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /> 
                                </div>
                                <div className="relative w-full mb-3 mt-8">
                                  <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Email:</label>
                                  <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                
                                <div className="relative w-full mb-3 mt-8">
                                  <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Password:</label>
                                  <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="relative w-full mb-3 mt-8">
                                  <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Phone Number:</label>
                                  <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="text" value={phonnumber} onChange={(e) => setPhonnumber(e.target.value)} required />
                                </div>
                                <div className="relative w-full mb-3 mt-8">
                                  <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Localisation:</label>
                                  <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="text" value={localisation} onChange={(e) => setLocalisation(e.target.value)} required />
                                </div>
                                  
                                <div className="text-center mt-6">
                                  <button className='bg-[#023047] text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"' type="submit">Register</button>
                                </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </section>
                    </form>
                    </div>
            </>           
    
  );
}

export default Reg;

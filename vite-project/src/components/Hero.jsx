import React from 'react'
import { Arrowdown } from './Arrowdown'

export const Hero = () => {
  return (
    <> 
      
      <div className='h-[100vh] bg-[#219EBC] w-full overflow-hidden'  style={{ position: 'relative' }}>
        
          <video className="h-auto w-full  overflow-hidden"  autoPlay muted loop >
            <source className='object-cover ' src="/Studio_Project_V2.mp4" type="video/mp4" />
          </video>
          <div className="absolute px-8 flex w-full  flex-col items-center sm:items-start z-10 top-14 sm:top-14 md:top-20 lg:top-36">
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold'>Frech Food <br/><span className='absolute  -rotate-45 with text-xl sm:text-4xl md:text-5xl lg:text-7xl -pl-5 text-[#FB8500]'>With</span>&nbsp;&nbsp; TimeCook</h1>
            <p className='text-white text-xs text-center sm:text-left  w-full sm:text-xs md:text-base  lg:text-lg sm:w-[50%]'>Welcome to TimeCook! Enjoy stress-free mealtime with our convenient meal-kit service. Explore delicious recipes and fresh ingredients delivered to your doorstep. Unleash your inner chef and savor the joy of cooking with TimeCook. Let's make every meal unforgettable!</p>
            <button type="button" className="text-white hover:text-lg hover:mr-8  mt-3 w-48 bg-[#FF9119] hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-bl-lg rounded-tr-lg  text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-transparent transition-all dark:hover:w-80 dark:hover:border-8 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
          Discover Our Plan 
          <svg className='fill-white  pl-3' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
        </button>
        
          <Arrowdown  className='flex self-center  pt-6 justify-center'/>
      

        </div>
            
        <div className='w-[100%] h-[70%] md:h-[80%] lg:h-[100%]' style={{  position: 'absolute',   top: 0, left: 0,background: 'rgba(2, 48, 71, 0.5)', /* White background with transparency */ backdropFilter: 'blur(3px)', /* Apply a blur effect */pointerEvents: 'none' /* Allow click-through to the video */}} />

      </div>
    </>
  )
}

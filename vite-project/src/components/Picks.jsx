import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the floating animation
const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Styled component for the image container
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;

  & img {
    animation: ${floatingAnimation} 3s infinite;
  }
`;

const Picks = () => {


  return (
    <div>
      <div className="flex w-full  mt-40 bg-[#219EBC] flex-col">
        <div className='flex gap-5 items-center pb-14 -px-16 flex-col'>
          <h1 className="-mt-16 z-40 font-bold text-white text-4xl xs:text-3lg md:text-5xl lg:text-6xl">Fast and Flavorful Food on the Go</h1>
          <img src="/lins.svg" alt="" className="w-[170%] absolute -mt-7 xs:-mt-14 md:-mt-16 lg:-mt-56" />
          <p className='w-[60%] z-10 text-white text-center text-base md:text-3xl'>Experience the perfect blend of quality ingredients, efficient service, and a vibrant atmosphere that keeps you coming back for more.</p>
          <div className="flex w-full mt-10 items-center space-x-72 justify-end">
            <div className='flex flex-col justify-center items-center  gap-y-4'>
              <ImageContainer>
                <img src="/berger 1.png" alt="" className="w-[400px] drop-shadow-2xl " />
              </ImageContainer>
              <h1 className="-mt-16 z-40 font-bold text-white text-4xl xs:text-3lg md:text-5xl lg:text-6xl">Fast and Flavorful Food on the Go</h1>
              <p className='w-[50%] z-10 text-white text-center text-base sx:text-3xl'>Experience the perfect blend of quality ingredients, efficient service, and a vibrant atmosphere that keeps you coming back for more.</p>
            </div>
           
            <div className='flex flex-col  gap-y-4'>
              <div className="cardFast  rounded-l-full z-10">
                <div className="contentFast gap-x-10 flex justify-start items-center ">
                  <img className="headingFast w-28 h-28 rounded-full" src='/berger 1.png'/>
                  <p className="paraFast text-2xl font-extrabold font-sans">
                    Lorem ipsum 
                  </p>
                  <button className="btnFast">Read more</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picks;

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
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setActiveIndex(0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while loading
  }

  const divData = [
    { color: '#8ECAE6' },
    { color: '#8ECAE6' },
    { color: '#8ECAE6' },
  ];

  return (
    <div>
      <div className="flex w-full mb-40 mt-40 bg-[#219EBC] flex-col">
        <div className='flex gap-5 items-center pb-32 -px-16 flex-col'>
          <h1 className="-mt-16 z-40 font-bold text-white text-4xl xs:text-3lg md:text-5xl lg:text-6xl">How to Use?</h1>
          <img src="/lins.svg" alt="" className="w-[170%] absolute -mt-7 xs:-mt-14 md:-mt-16 lg:-mt-80" />
          <p className='w-[50%] z-10 text-white text-center text-base md:text-3xl'>Super easy, Simply follow these Instructions.</p>
          <div className="flex w-full mt-10 items-center space-x-72 justify-end">
            <div className='flex flex-col justify-center items-center  gap-y-4'>
              <ImageContainer>
                <img src="/berger 1.png" alt="" className={`w-[400px] drop-shadow-2xl ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)} />
              </ImageContainer>
              <h1 className="-mt-16 z-40 font-bold text-white text-4xl xs:text-3lg md:text-5xl lg:text-6xl">How to Use?</h1>
              <p className='w-[50%] z-10 text-white text-center text-base sx:text-3xl'>Super easy, Simply follow these Instructions.</p>
            </div>
           
            <div className='flex flex-col gap-y-4'>
              {divData.map((item, index) => (
                <div
                  key={index}
                  className={`w-[500px] h-[100px] drop-shadow-2xl rounded-l-full ${activeIndex === index ? 'active' : ''}`}
                  style={{ backgroundColor: item.color }}
                  onClick={() => handleClick(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picks;

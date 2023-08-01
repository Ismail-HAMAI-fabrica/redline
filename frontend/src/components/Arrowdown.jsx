import React from 'react'
import Lottie from 'lottie-react';
import anil from '../animation/03 Right Arrow.json'


export const Arrowdown = ({className}) => {
  return (
    <>
     <div className={className}>
      <Lottie className=' z-50 left-60 fill-[#FFB703] rotate-90' animationData={anil}/>
    </div>
    
    </>
  )
}

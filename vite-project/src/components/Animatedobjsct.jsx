import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import anil from '../animation/118628-food.json'

function Animated() {


  
  return (
    <div className=''>
      <Lottie className='w-[400px]' animationData={anil}/>
    </div>
  );
}

export default Animated;
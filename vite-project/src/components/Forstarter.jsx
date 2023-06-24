import React from 'react'


 const Forstarter = () => {
  return (
    <>
    <div className="flex w-full mb-40 mt-40  bg-[#219EBC] flex-col ">
    <div className='flex gap-5 items-center pb-32 -px-16 flex-col '>
        <h1 className="-mt-16 z-40 font-bold text-white text-4xl xs:text-3lg md:text-5xl  lg:text-6xl ">How to Use?</h1>
        <img src="/line.svg" alt="" className=" w-[70%] -mt-7  xs:-mt-14 md:-mt-16  lg:-mt-20" />
        <p className=' w-[50%] z-10 text-white -mt-7  xs:-mt-14 md:-mt-16  lg:-mt-20 text-center text-3xl'>Super easy, Simply follow these Instructions.</p>
        <div className=" flex mt-10 flex-wrap justify-center gap-11">
         <div className="card2 card21">Register</div>
         <div className="card2 card22">Chose Recipe</div>
         <div className="card2 card23">Confirm the Order</div>
         
        </div>
    </div>
    </div>
    
    </>
  )}
export default Forstarter;
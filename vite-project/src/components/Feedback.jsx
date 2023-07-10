import React from 'react'

const Feedback = () => {
  return (
    <>
        <div className='flex flex-col gap-y-11 p-40 items-center '>
        <h1 className="-mt-16 z-40 font-bold text-white text-4xl text-center xs:text-3lg md:text-5xl lg:text-6xl">What Our Happy Customers Are Saying About Us</h1>
          <img src="/lins.svg" alt="" className="w-[170%] absolute -z-10 rotate-180 -mt-7 xs:-mt-14 md:-mt-16 lg:-mt-56" />
          <div className='flex justify-center gap-16  flex-wrap w-[80%]'>
            <div className='rounded-full w-16 h-16 bg-slate-50'></div>
            <div className='rounded-full w-16 h-16 bg-slate-50'></div>
            <div className='rounded-full w-16 h-16 bg-slate-50'></div>
            <div className='rounded-full w-16 h-16 bg-slate-50'></div>
            <div className='rounded-full w-16 h-16 bg-slate-50'></div>
          </div>
          <div className='w-[90%] h-[300px] bg-[#8ECAE6]  rounded-tl-3xl rounded-br-3xl rounded-tr-3xl'>

          </div>

        </div>

    </>
  )
}

export default Feedback

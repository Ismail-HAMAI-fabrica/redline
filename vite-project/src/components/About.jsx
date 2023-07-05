import React from 'react'
import { Tilt } from 'react-tilt';

 const About = () => {
  return (
    <>
    <div className="flex  z-20  -mt-64 flex-col ">
       <img className=' z-40 bottom-0 fill-[#219EBC]'  src="/wave.svg" alt="" />
  
       <div className='flex gap-5 items-center pb-32 -px-16   flex-col bg-[#219EBC]'>
       <h1 className="-mt-16 z-40 font-bold text-white  text-6xl">Why TimeCook?</h1>
       <p className='text-xs w-[50%] z-10 text-white text-center md:text-base'>Don't waste precious time waiting for your food. Our app provides swift and reliable delivery, ensuring your meals are delivered right to your doorstep, saving you valuable time and effort.</p>
       <div className="flex flex-wrap pt-7 gap-14 justify-center items-center flex-row">
      <Tilt > <div className="card">
        <div className="flex flex-col first-content">
            <img src="/healthy-food.png" alt="" className="w-[100px]" />
            <span className='text-center '>Fresh and Healthy </span>
        </div>
        <div className="fle second-content">
        <p className='font-medium solle   text-center text-base '>Meal kits provide a convenient solution for delicious and healthy homemade dishes.</p>
        </div>
        
        </div></Tilt>
        <Tilt > <div className="card">
        <div className="flex flex-col first-content">
            <img src="/groceries.png" alt="" className="w-[100px]" />
            <span className='text-center '>Meal-kit Services</span>
        </div>
        <div className="fle second-content">
        <p className='font-medium solle   text-center text-base '>Services that provide customers with pre-portioned ingredients and recipes to cook meals at home.</p>
        </div>
        
        </div></Tilt>

        <Tilt > <div className="card">
        <div className="flex flex-col first-content">
            <img src="/delivery-man.png" alt="" className="w-[100px]" />
            <span className='text-center '>Planned delivery</span>
        </div>
        <div className="fle second-content">
        <p className='font-medium solle   text-center text-base '>Say goodbye to grocery store runs and hello to hassle-free cooking.</p>
        </div>
        
        </div></Tilt>



        <Tilt > <div className="card">
        <div className="flex flex-col first-content">
            <img src="/food.png" alt="" className="w-[100px]" />
            <span className='text-center'>Quick and Easy Meals </span>
        </div>
        <div className="fle second-content">
        <p className='font-medium solle text-center text-base '>They require minimal prep and cooking time, using simple ingredients.making cleanup a breeze. Enjoy delicious, homemade meals</p>
        </div>
        
        </div></Tilt>

        </div>

            </div>

       
       
    </div>
    </>
  )
}
export default About;
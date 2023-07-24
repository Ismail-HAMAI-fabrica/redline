import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Grid = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
      }, []);
    
      const fetchRecipes = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/getAllRecipes');
          setRecipes(response.data);
        } catch (error) {
          console.error(error);
        }
      };
     
   
  return (
    <>
<div className='flex flex-col justify-center'>


<h1 className="mt-16 z-40 text-center font-bold text-white text-4xl xs:text-3lg md:text-5xl lg:text-6xl">
Bon appetit!
          </h1>
<div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
</div>
    
<div className="grid grid-cols-2 mx-5 pb-40 md:grid-cols-4 gap-4">
   
    {recipes.map((recipe) => (
         <div key={recipe._id} className="grid gap-4">
        <div>
                <div className="w-full h-auto max-w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="pb-9 rounded-t-lg" src={recipe.image} alt={recipe.title} />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
                        </a>
                       
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{recipe.price}DA</span>
                            <a href="#" className="text-white bg-[#219EBC] hover:bg-[#023047] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
))}
</div>
</div>

    </>
  )
}

import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import OrderSuccessModal from './OrderSuccessModal';

const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-300'; // Use your desired background color className for 'easy'
      case 'medium':
        return 'bg-yellow-300'; // Use your desired background color className for 'medium'
      case 'hard':
        return 'bg-red-300'; // Use your desired background color className for 'hard'
      default:
        return ''; // Empty string if no difficulty is selected or unknown difficulty
    }
  };
export const Grid = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleOrder = async (recipeId, price) => {
            try {
                const orderData = {
                    mult: orderQuantity, // Use the state value for the order quantity
                  };

            // Make the axios request to the backend
            const response = await axios.post(`http://localhost:3000/api/order/${recipeId}`,orderData ,{headers});
            
            console.log(response.data); // This will log the created order object returned from the backend
            setShowSuccessModal(true);
            } catch (error) {
            console.error(error);
            }
        };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

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

  const searchQueryRef = useRef('');

  const handleSearch = async () => {
    try {
      const searchQuery = searchQueryRef.current.value.trim();
      if (searchQuery !== '') { // Only search if there's a non-empty query
        const response = await axios.get(`http://localhost:3000/api/searchRecipesByTitle/${searchQuery}`);
        setSearchResults(response.data);
      } else {
        setSearchResults([]); // Clear search results if the search query is empty
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRecipesAlphabetically = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getRecipesAl');
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRecipesByDifficulty = async (difficulty) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/getRecipesByDiffi/${difficulty}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Combine search results and recipes based on whether a search is performed or not
  const recipesToDisplay = searchResults.length > 0 ? searchResults : recipes;

  return (
    <>
      <div className='flex flex-col justify-center'>
        <img src="/Gridwave.svg" className='absolute -z-10 top-0 rotate-180' alt="" />
        <h1 className="mt-16 z-40 text-center font-bold text-white text-4xl xs:text-3lg md:text-5xl lg:text-6xl">
          Bon appetit!
        </h1>
        <div className="flex items-center gap-5 justify-center py-4 md:py-8 flex-wrap">
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown} // Toggle the dropdown on button click
          className="flex Bgrid"
          type="button"
        >
          Difficulty{' '}
          <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {/* Render the dropdown only if it's open */}
        {isDropdownOpen && (
          <div id="dropdown" className="z-10 ">
            <ul className="py-2 text-sm Bgrid2" aria-labelledby="dropdownDefaultButton">
              <li>
                <a
                  href="#"
                  onClick={() => fetchRecipesByDifficulty('easy')}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Easy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => fetchRecipesByDifficulty('medium')}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => fetchRecipesByDifficulty('hard')}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Hard
                </a>
              </li>
            </ul>
          </div>
        )}

        <button className='Bgrid' onClick={fetchRecipesAlphabetically}>Alphabt Order</button>
       
          <input
            type="text"
            className='gridinput'
            ref={searchQueryRef}
            placeholder="Search by title..."
          />
          <button className='-ml-4 Bgrid' onClick={handleSearch}>Search</button>
        </div>
        <div className="flex flex-wrap justify-center mx-5 pb-40  gap-4">
          {recipesToDisplay.map((recipe) => (
            <div key={recipe._id} className=" gap-4">
              <div>
                <div className="w-[290px] h-[400px] max-w-full gap-3 pb-6 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a className='relative' href="#">
                    <div className={`absolute right-5 p-1  rounded-lg top-5 ${getBackgroundColor(recipe.difficulty)}`}>{recipe.difficulty}</div>
                    <img className=" pb-5 w-full h-[300px] rounded-t-lg" src={recipe.image} alt={recipe.title} />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
                    </a>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{recipe.price}DA</span>
                      <input
                      type="number"
                      min="1"
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
                      className="text-black w-16 h-8 p-2 border border-gray-400 rounded-md focus:outline-none"
                    />
                      <button
                            onClick={() => handleOrder(recipe._id, recipe.price)}
                            className="text-white bg-[#219EBC] hover:bg-[#023047] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Order
                      </button>
                      {showSuccessModal && (
                            <OrderSuccessModal onClose={() => setShowSuccessModal(false)} />
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
       
        </div>
      </div>
    </>
  );
};

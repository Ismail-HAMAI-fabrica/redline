import React, { useEffect } from 'react';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CreateRecipeForm from './Recipesform';
import axios from 'axios';

const ITEMS_PER_PAGE = 8;


const Recipes = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
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
 
  const deleteRecipe = async (recipeId) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.delete(`http://localhost:3000/api/deleteRecipe/${recipeId}`, { headers });
      console.log('Recipe deleted successfully!');
      fetchRecipes(); // Fetch updated recipes after successful deletion
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRecipe = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstRecipe = indexOfLastRecipe - ITEMS_PER_PAGE;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-col">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          {/* Dialog overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* Dialog content */}
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Create Recipe
                        </Dialog.Title>
                        <div className="mt-2">
                          <CreateRecipeForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Recipe Search */}
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setOpen(true)}
                className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
              >
                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md">
                  <div className="hidden sm:block">
                    Add Recipe &nbsp; &nbsp; +
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Recipe Table */}
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border-2 border-[#023047] rounded-lg">
            <table className="min-w-full divide-y">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Difficulty
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-slate-100">
              {currentRecipes.map((recipe)=> (
                                <tr key={recipe._id}>
                                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {recipe.difficulty}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {recipe.title}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {recipe.price}
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a className="text-green-500 hover:text-green-700" href="#">
                                      {recipe.createdAt}
                                    </a>
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <a
                                      className="text-red-500 hover:text-red-700"
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        deleteRecipe(recipe._id);
                                      }}
                                    >
                                      Delete
                                    </a>
                                  </td>
                                </tr>
                              ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#219EBC] text-white rounded mr-2"
        >
          Prev Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#219EBC] text-white rounded"
        >
          Next Page
        </button>
      </div>
      </div>
      </div>
    );
};

export default Recipes;

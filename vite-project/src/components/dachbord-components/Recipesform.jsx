import React, { useState } from 'react';
import axios from 'axios';
import { PhotoIcon } from '@heroicons/react/24/solid'
import {
  ref,
  uploadBytes,
  getDownloadURL,

} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

const CreateRecipeForm = () => {
  const [imageUpload, setImageUpload] = useState(null);


    const [recipe, setRecipe] = useState({
      title: '',
      description: '',
      ingredients: [],
      instructions: [],
      image: '' ,
      price: 0,
      difficulty: '',
    });
   
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setRecipe({ ...recipe, [name]: value });
    };
  
    const handleIngredientChange = (index, event) => {
      const { name, value } = event.target;
      const updatedIngredients = [...recipe.ingredients];
      updatedIngredients[index][name] = value;
      setRecipe({ ...recipe, ingredients: updatedIngredients });
    };
  
    const handleInstructionChange = (index, event) => {
      const { value } = event.target;
      const updatedInstructions = [...recipe.instructions];
      updatedInstructions[index] = { step: value };
      setRecipe({ ...recipe, instructions: updatedInstructions });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      const token = localStorage.getItem('token');
    
      const headers = {
        Authorization: `Bearer ${token}`,
      };
    
      const imageFile = document.getElementById('image-input').files[0];
      if (imageFile == null) return;
    
      const imageUrl = await uploadImage(imageFile);
    
      const updatedRecipe = {
        ...recipe,
        image: imageUrl,
      };
    
      axios.post('http://localhost:3000/api/createRecipe', updatedRecipe, { headers })
        .then((response) => {
          // Handle the response or perform any necessary actions
        })
        .catch((error) => {
          // Handle the error
        });
    };
    
    const uploadImage = (file) => {
      return new Promise((resolve, reject) => {
        const imageRef = ref(storage, `images/${file.name + v4()}`);
      
        uploadBytes(imageRef, file)
          .then((snapshot) => getDownloadURL(snapshot.ref))
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      });
    };
    
    const addIngredient = () => {
      setRecipe({
        ...recipe,
        ingredients: [...recipe.ingredients, { name: '', quantity: '' }],
      });
    };
  
    const removeIngredient = (index) => {
      const updatedIngredients = [...recipe.ingredients];
      updatedIngredients.splice(index, 1);
      setRecipe({ ...recipe, ingredients: updatedIngredients });
    };
  
    const addInstruction = () => {
      setRecipe({
        ...recipe,
        instructions: [...recipe.instructions, { step: '' }],
      });
    };
  
    const removeInstruction = (index) => {
      const updatedInstructions = [...recipe.instructions];
      updatedInstructions.splice(index, 1);
      setRecipe({ ...recipe, instructions: updatedInstructions });
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Recipe Title
              </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                            type="text"
                            name="title"
                            value={recipe.title}
                            onChange={handleInputChange}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            required
                            />
                        </div>
            </div>
            </div>
                <div className="col-span-full">
                    <label htmlFor="discription" className="block text-sm font-medium leading-6 text-gray-900">
                    Recipe Description
                    </label>
                        <div className="mt-2">
                            <textarea
                            type="text"
                            name="description"
                            rows={3}
                            className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={recipe.description}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                </div>
            </div>
         
  
        <h3>Ingredients:</h3>
        {recipe.ingredients.map((ingredient, index) => (
          <div className='flex flex-row gap-x-2 items-center'  key={index}>
            <div className="sm:col-span-3">
            <div className="mt-2">
                <input
                type="text"
                name="name"
                value={ingredient.name}
                onChange={(event) => handleIngredientChange(index, event)}
                placeholder="Ingredient name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                />
            </div>
            </div>
            <div className="sm:col-span-3">
            <div className="mt-2">
                <input
                type="text"
                name="quantity"
                value={ingredient.quantity}
                onChange={(event) => handleIngredientChange(index, event)}
                placeholder="Quantity"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
            />
            </div>
            </div>
            <button  type="button" onClick={() => removeIngredient(index)}>
            <svg className='fill-red-500 mt-2 ' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient}>
        <svg className='fill-[#8ECAE6]' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
        </button>
  
        <h3>Instructions:</h3>
        {recipe.instructions.map((instruction, index) => (
          <div className='flex gap-x-3' key={index}>
             <div className="sm:col-span-3">
            <div className="mt-2">
            <input
              type="text"
              value={instruction.step}
              onChange={(event) => handleInstructionChange(index, event)}
              placeholder={`Step ${index + 1}`}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
            </div>
            </div>
            <button type="button" onClick={() => removeInstruction(index)}>
            <svg className='fill-red-500 mt-2 ' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </button>
          </div>
        ))}
        <button type="button" onClick={addInstruction}>
        <svg className='fill-[#8ECAE6]' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
        </button>
  
        <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                    
                      <input type="file"
                              id='image-input' />
                     
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
                <div className="mt-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                </label>
                        <input
                        type="number"
                        name="price"
                        value={recipe.price}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        />
                </div>
            </div>
         <div className="sm:col-span-3">
         <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-gray-900">
                Difficulty
              </label>
                <div className="mt-2">
                    <select
                        name="difficulty"
                        value={recipe.difficulty}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>         

        </div>
        <div className="flex mt-6 items-center justify-end">
        <button
          type="submit"
          className="rounded-md bg-[#FFB703] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FB8500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        </div>
      </form>
    );
  };

export default CreateRecipeForm;
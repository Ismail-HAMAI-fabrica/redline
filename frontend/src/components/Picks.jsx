import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
const fadeinAnimation = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

// Styled component for the image container
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;

  & img  {
    animation: ${floatingAnimation} 3s infinite;
    
  } 
  & p{
    animation: ${floatingAnimation} 3s infinite;
  } 
`;


const Picks = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/bergursRecipes');
      setRecipes(response.data.recipes); // Update state with the array of recipes from the response
    } catch (error) {
      console.error(error);
    }
  };
  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <div className="flex w-full mr-0 mt-40 bg-[#219EBC] flex-col">
        <div className="flex gap-5 items-center pb-14 -px-16 flex-col">
          <h1 className="-mt-16 z-40 font-bold text-white text-4xl xs:text-3lg md:text-5xl lg:text-6xl">
            Fast and Flavorful Food on the Go
          </h1>
          <img src="/lins.svg" alt="" className="w-[170%] absolute -mt-7 xs:-mt-14 md:-mt-16 lg:-mt-56" />
          <p className="w-[60%] z-10 text-white text-center text-base md:text-3xl">
            Experience the perfect blend of quality ingredients, efficient service, and a vibrant atmosphere that keeps
            you coming back for more.
          </p>

          <div className="flex flex-wrap gap-2 mr-0  w-full mt-6 items-center  justify-between">
            <div className="flex flex-col relative ml-16 items-center   gap-y-4">
              <ImageContainer>
             
              {selectedRecipe ? (
                  <img src={selectedRecipe.image}  className=" fadein w-[40%] drop-shadow-2xl"  />
                  
                ) : (
                  <img src="/berger 1.png"  className="w-[350px] drop-shadow-2xl" />
                  
                )}
                <p className='absolute  font-bold priceeffact'>{selectedRecipe ? selectedRecipe.price : '450'}DZ</p>
              </ImageContainer>
    
              <h1 className="-mt-11 w-[490px]  z-40 text-center font-bold text-white text-2xl xs:text-2lg md:text-4xl lg:text-5xl">
                {selectedRecipe ? selectedRecipe.title : 'Classic Beef Burger'}
              </h1>
              <p className="w-[490px] z-10 text-white text-center text-base sx:text-3xl">
                {selectedRecipe
                  ? selectedRecipe.description
                  : 'A classic beef burger with lettuce, tomato, and cheese.'}
              </p>
            </div>
           
            <div className='flex ml-auto mr-0 flex-col justify-start gap-y-7'>
            {recipes.map((recipe) => (
              <div className="cardFast   rounded-l-full z-10">
                <div className="contentFast  flex justify-start gap-x-5 align-middle items-center"  onClick={() => handleCardClick(recipe)} >
                  <img className="headingFast  ml-2 w-28 rounded-full" src={recipe.image} alt={recipe.title} />
                  <p className="paraFast text-lg w-52 text-center font-extrabold font-sans">{recipe.title}</p>
                  <button className="btnFast">Order</button>
                
                </div>
              </div>
               ))}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picks;

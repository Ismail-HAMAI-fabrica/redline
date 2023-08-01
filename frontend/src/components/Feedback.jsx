import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedbackForm from './feedform';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [rating, setRating] = useState(5); // Default rating set to 5 stars

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    if (selectedFeedback) {
      setRating(selectedFeedback.rating);
    }
  }, [selectedFeedback]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getAllFeedback'); // Replace with your API endpoint
      setFeedbacks(response.data);

      setSelectedFeedback(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardClick = (feedback) => {
    setSelectedFeedback(feedback);
  };


  return (
    <div className="flex flex-col gap-y-8 p-40 items-center">
      <h1 className="-mt-16 z-40 font-bold text-white text-4xl text-center xs:text-3lg md:text-5xl lg:text-6xl">
        What Our Happy Customers Are Saying About Us
      </h1>
      <img
        src="/lins.svg"
        alt=""
        className="w-[170%] absolute -z-10 rotate-180 -mt-7 xs:-mt-14 md:-mt-16 lg:-mt-56"
      />

      <div className="flex flex-wrap justify-center gap-8 w-[80%]">
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            onClick={() => handleCardClick(feedback)}
            className="flex  items-center justify-center cursor-pointer"
          >
            <button className='feedbutton z-10'><p className="font-bold text-xl">{feedback.user}</p><span></span></button>
          </div>
        ))}
      </div>

     
        <div className="w-[90vw] h-auto bg-[#023047] flex flex-col gap-4 py-8 px-8 justify-evenly items-center rounded-tl-3xl rounded-br-3xl rounded-tr-3xl">
          <p className=" text-white text-center text-base md:text-3xl">"{selectedFeedback ? selectedFeedback.feedback : 'I absolutely love the meal kits! They have made my weeknight dinners so much easier and enjoyable. The recipes are diverse and delicious, and the pre-portioned ingredients save me a lot of time and effort. Highly recommended!'}"</p>
        
          <div className="rating">
          <input type="radio" id="star5" name="rate" value="5" checked={rating === 5} />
          <label htmlFor="star5" title="text"></label>
          <input type="radio" id="star4" name="rate" value="4" checked={rating === 4} />
          <label htmlFor="star4" title="text"></label>
          <input type="radio" id="star3" name="rate" value="3" checked={rating === 3} />
          <label htmlFor="star3" title="text"></label>
          <input type="radio" id="star2" name="rate" value="2" checked={rating === 2} />
          <label htmlFor="star2" title="text"></label>
          <input type="radio" id="star1" name="rate" value="1" checked={rating === 1} />
          <label htmlFor="star1" title="text"></label>
        </div>
        </div>
        <div className="flex justify-center items-end ">
        <FeedbackForm/>
      </div>
      
    </div>
  );
};

export default Feedback;

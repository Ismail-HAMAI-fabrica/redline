import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [rating2, setRating2] = useState(1); // Default rating set to 1 star
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'feedback') {
      setFeedback(value);
    } else if (name === 'rating') {
      setRating2(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      feedback,
      rating: rating2,
    };
    
    const token = localStorage.getItem('token');
  
      const headers = {
        Authorization: `Bearer ${token}`,
      };

    try {
      const response = await axios.post('http://localhost:3000/api/feedback', formData , {headers});
      console.log(response.data.message);
      setFeedback('')
   
      // Handle success or show a success message to the user
    
    } catch (error) {
      console.error(error,formData);
      // Handle error or show an error message to the user
    }
  };

  const handleRating2Change = (event) => {
    setRating2(parseInt(event.target.value, 10)); // Parse the value to an integer
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#023047] border w-[300px]  border-slate-700 grid grid-cols-6 gap-2 rounded-lg p-4">
        <textarea
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleInputChange}
          required
          className="bg-[#023047] text-slate-200 placeholder:text-slate-200 placeholder:opacity-50 border border-slate-600 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-200"
          placeholder="Your feedback..."
        ></textarea>
        <hr className="col-span-6 border border-slate-600 my-2" />
        <div className="rating2 col-span-3">
          <input
            type="radio"
            id="1star5"
            name="rating"
            value="5"
            checked={rating2 === 5}
            onChange={handleRating2Change}
          />
          <label htmlFor="1star5" title="text"></label>
          <input
            type="radio"
            id="1star4"
            name="rating"
            value="4"
            checked={rating2 === 4}
            onChange={handleRating2Change}
          />
          <label htmlFor="1star4" title="text"></label>
          <input
            type="radio"
            id="1star3"
            name="rating"
            value="3"
            checked={rating2 === 3}
            onChange={handleRating2Change}
          />
          <label htmlFor="1star3" title="text"></label>
          <input
            type="radio"
            id="1star2"
            name="rating"
            value="2"
            checked={rating2 === 2}
            onChange={handleRating2Change}
          />
          <label htmlFor="1star2" title="text"></label>
          <input
            type="radio"
            id="1star1"
            name="rating"
            value="1"
            checked={rating2 === 1}
            onChange={handleRating2Change}
          />
          <label htmlFor="1star1" title="text"></label>
        </div>

    

        <button
          type="submit"
          className="bg-slate-700 stroke-slate-200 border border-slate-600 col-span-1 col-end-6 flex justify-center rounded-lg p-2 duration-300 hover:bg-slate-600 hover:text-white focus:fill-blue-200 focus:bg-blue-600"
        >
          <svg className="fill-[#FFB703] h-[20px]"  viewBox="0 0 512 512">
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;

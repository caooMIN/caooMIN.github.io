import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodDetails = () => {
  const { id } = useParams();
  const foodData = useSelector((state) => state.foodData);
  const foodItem = foodData.find((food) => food.id.toString() === id);

  const notify = (message) => {
    toast(message);
  };

  if (!foodItem) {
    return (
      <div>
        {notify('Card Not Found Check The Correct Path')}
        <ToastContainer />
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{foodItem.title}</h1>
      <img src={foodItem.image} alt={foodItem.title} />

      {foodItem.description ? (
        <div>
          <h2>Description: </h2>
          <p>{foodItem.description}</p>
        </div>
      ) : (
        <p>Description not available</p>
      )}

      {foodItem.ingredients ? (
        <div>
          <h2>Ingredients:</h2>
          <ul>
            {foodItem.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Ingredients not for you</p>
      )}

      {/* Add more details as needed */}
      <ToastContainer />
    </div>
  );
};

export default FoodDetails;
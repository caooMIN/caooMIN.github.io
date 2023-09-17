import React, { useState } from 'react';
import CardCard from './CardCard';
import { useSelector } from 'react-redux';

const CardList = () => {
  const [selectedRate, setSelectedRate] = useState('all');
  const thefoods = useSelector((state)=> state.foodData)
  const handleRateChange = (e) => {
    setSelectedRate(e.target.value);
  };

  const filteredFoods = selectedRate === 'all'
    ? thefoods
    : thefoods.filter(food => food.rate.toString() === filteredFoods);

  return (
    <div>
      <h2>Filter by Rating:</h2>
      <select
        value={filteredFoods}
        onChange={handleRateChange}
      >
        <option value="all">All</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <div className='carded'>
        {thefoods.map(food => (
          <CardCard food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

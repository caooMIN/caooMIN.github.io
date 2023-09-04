import "../../App.css" ;
import React from 'react';
import CardCard from './CardCard';
const CardList = ({ thefoods }) => {
  return (
    <div className='carded'>
      {thefoods.map(food => (
          <CardCard food={food} key={food.id} />
      ))}
    </div>
  );
};

export default CardList;

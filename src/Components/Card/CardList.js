import "../../App.css" ;
import React from 'react';
import CardCard from './CardCard';
import { useSelector } from "react-redux";
const CardList = () => {
  //
  const thefoods = useSelector((state)=> state.foodData)
  return (
    <div className='carded'>
      {thefoods.map(food => (
          <CardCard food={food} key={food.id} />
      ))}
    </div>
  );
};

export default CardList;

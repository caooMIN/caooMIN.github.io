import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_card } from '../JS/Actions';
import AddCard from '../Components/Card/AddCard';
import CardList from '../Components/Card/CardList';

const Home = ({ thefoods }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [selectedRate, setSelectedRate] = useState('');

  const handleAddCard = (newCardData) => {
    dispatch(add_card(newCardData));
  };

  return (
    <div>
      <h1>Our Best Meals</h1>
      <AddCard onAddCard={handleAddCard} />
      <CardList thefoods={thefoods} selectedRate={selectedRate} />
    </div>
  );
};

export default Home;

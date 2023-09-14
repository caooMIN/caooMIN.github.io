import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { foodData } from '../../Data';
import { newId, foodData2 } from '../Card/AddCard';
import CardCard from '../Card/CardCard';
const TheFood = () => {
  const { id } = useParams();
  const foodId =  id | 0;
  const selectedFood = foodData.find(item => item.id === foodId) || foodData2.find(item => item.id === newId)   ;

  return (
    <Container>
      {selectedFood ? (
        <div className="food-details">
          <h2>{selectedFood.title}</h2>
          <div className="food-info">
            <Card>
              <Card.Img
                src={selectedFood.image}
                alt={selectedFood.title}
                style={{ width: '80%',  margin: '0 auto'}}
              />
              <Card.Body>
                <Card.Text>
                  <Card.Title>Description:</Card.Title>
                  {selectedFood.description}
                </Card.Text>
                <Card.Title>Nutrition Facts:</Card.Title>
                <ul>
                  <li>Serving Size: {selectedFood.nutritionFacts.servingSize}</li>
                  <li>Calories: {selectedFood.nutritionFacts.calories}</li>
                  <li>Total Fat: {selectedFood.nutritionFacts.totalFat}</li>
                  <li>Protein: {selectedFood.nutritionFacts.protein}</li>
                </ul>
                <h6>Preparation Time: {selectedFood.prepTime}</h6>
                <h6>Cooking Time: {selectedFood.cookTime}</h6>
                <Card.Title>Ingredients:</Card.Title>
                <ul>
                  {selectedFood.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div>
          <CardCard />
        </div>
      )}
    </Container>
  );
};

export default TheFood;

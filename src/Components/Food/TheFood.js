import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { foodData } from '../../Data';
import ErrorPage from '../../Pages/ErrorPage';
const TheFood = () => {
    const { id } = useParams();
    const foodId = parseInt(id);

    const selectedFood = foodData.find(item => item.id === foodId) || null;
  return (
    <Container>
      {selectedFood ? (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="my-4">
            <h2>{selectedFood.title}</h2>
              <Card.Img variant="top" src={selectedFood.image} alt={selectedFood.title}   style={{width: '100%',maxHeight:'60rem' }} />
                <Card.Body>
                <Card.Text><Card.Title>Description:</Card.Title>{selectedFood.description}</Card.Text>
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
          </Col>
        </Row>
      ) : (
        <div><ErrorPage /></div>
      )}
    </Container>
  )
}

export default TheFood
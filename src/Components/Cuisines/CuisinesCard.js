import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css.css';
import ErrorPage from "../../Pages/ErrorPage";
const CuisinesCard = ({ cuisine }) => {
  if (!cuisine) {
    return <ErrorPage />;
  }

  return (
    <Card>
      <Card.Img variant="top" src={cuisine.image} />
      <Card.Body className="shape">
        <Card.Title className="cuisine-card2">{cuisine.name}</Card.Title>
        <Card.Text>{cuisine.description}</Card.Text>
        <Card.Text><strong>Popular Dishes:</strong> {cuisine.popularDishes.join(" , ")}</Card.Text>
        <Card.Text><strong>Region:</strong> {cuisine.region}</Card.Text>
        <Card.Text><strong>Key Ingredients:</strong> {cuisine.ingredients.join(" , ")}</Card.Text>
        <Link to={`/cuisines/${cuisine.id}`}>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CuisinesCard;

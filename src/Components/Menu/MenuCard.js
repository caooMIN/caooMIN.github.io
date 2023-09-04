import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Col, Row } from "react-bootstrap";
import { menuData } from "../../Data3";
import ErrorPage from "../../Pages/ErrorPage";

const MenuCard = () => {
  const { id } = useParams();
  const selectedMenu = menuData.find((menu) => menu.id === parseInt(id));

  return (
    <Container>
      {selectedMenu ? (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="my-4">
              <h2>{selectedMenu.name}</h2>
              <Card.Body>
                {selectedMenu.items.map((item, index) => (
                  <div key={index}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <div><ErrorPage /></div>
      )}
    </Container>
  );
};

export default MenuCard;

import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cuisineData } from "../Data2";
import { menuData } from "../Data3";
import { toast } from 'react-toastify';

const Navigation = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleBrandClick = () => {
    setIsRotated(!isRotated);
    const messages = ["Welcome to TastyBites!", "Discover Delicious Meals!", "Enjoy Your Food Journey!","The sun is shining brightly today.","What's your favorite book of all time?","Learning new things can be so much fun!","Do you have any plans for the weekend?","I can't believe how fast time is flying by.","Cooking is one of my favorite hobbies.","Have you ever been to a music festival?","Technology is changing the world rapidly.","It's important to stay hydrated during hot weather.","I love spending time in nature, surrounded by trees and birds."];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    toast(randomMessage);
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
    >
      <Container>
        <Link
          to="#"
          className={`navbar-brand-link ${isRotated ? "rotate" : ""}`}
          onClick={handleBrandClick}
        >
          <Navbar.Brand>TastyBites</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="Select a Menu" id="basic-nav-dropdown">
              {menuData.map((menu) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/menu/${menu.id}`}
                  key={menu.id}
                >
                  {menu.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavDropdown title="Cuisines" id="basic-nav-dropdown">
              {cuisineData.map((cuisine) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/cuisines/${cuisine.id}`}
                  key={cuisine.id}
                >
                  {cuisine.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

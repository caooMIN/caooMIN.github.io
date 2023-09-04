import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cuisineData } from "../Data2";
import { menuData } from "../Data3";

const Navigation = ({menuItems}) => {

  return (
    <div>
      <Navbar fixed='top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>TastyBites</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'} >Home</Nav.Link>

              <NavDropdown title=" Select a Menu" id="basic-nav-dropdown" >
                {menuData.map((menuData) => (
                  <NavDropdown.Item
                  as={Link}
                  to={`/menu/${menuData.id}`} 
                  key={menuData.id}>
                    {menuData.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              
            <NavDropdown title="Cuisines" id="basic-nav-dropdown">
              {cuisineData.map(cuisine => (
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
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../style/Nav.css'
import { TabContainer } from 'react-bootstrap';



export default function NavBar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <TabContainer>
        <Navbar.Brand id='Brand' href="/">Fresh<span>Cart</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link items'>Home</Link>
            <NavDropdown title="Shop" className='items'>
              <NavDropdown.Item href="#Shop1">Shop1</NavDropdown.Item>
              <NavDropdown.Item href="#Shop2">Shop2</NavDropdown.Item>
              <NavDropdown.Item href="#Shop3">Shop3</NavDropdown.Item>
              <NavDropdown.Item href="#Shop4">Shop4</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Stores" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Stores1">Stores1</NavDropdown.Item>
              <NavDropdown.Item href="#Stores2">Stores2</NavDropdown.Item>
              <NavDropdown.Item href="#Stores3">Stores3</NavDropdown.Item>
              <NavDropdown.Item href="#Stores4">Stores4</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Pages1">Pages1</NavDropdown.Item>
              <NavDropdown.Item href="#Pages2">Pages2</NavDropdown.Item>
              <NavDropdown.Item href="#Pages3">Pages3</NavDropdown.Item>
              <NavDropdown.Item href="#Pages4">Pages4</NavDropdown.Item>
            </NavDropdown>
            <Link className='nav-link items' href="#" >Dashboard</Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
          
          <Nav>
          <a href='/login'><FontAwesomeIcon id='icon' icon={faUser} /></a>
          </Nav>
        </Navbar.Collapse>
      </TabContainer>
    </Navbar>
  );
}


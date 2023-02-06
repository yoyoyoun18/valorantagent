import React from 'react';
import '../App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Header() {
  let navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" style={{zIndex: '11'}}>
        <Container style={{ width: '1800px', height: '30px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
          <Navbar.Brand href="/">
            VALORANT
          </Navbar.Brand>
          <Nav className="me-auto">
            
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
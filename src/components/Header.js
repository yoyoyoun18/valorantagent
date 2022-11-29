import React from 'react';
import '../App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container style={{ width: '1800px', height: '30px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
          <Navbar.Brand href="#home">VAL.PS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ width: '100px', alignItems: 'center'}}>전적 검색</Nav.Link>
            <Nav.Link href="#features" style={{ width: '100px'}}>요원 티어</Nav.Link>
            <Nav.Link href="#pricing" style={{ width: '100px'}}>공지사항</Nav.Link>
            <Nav.Link href="#pricing" style={{ width: '100px'}}>커뮤니티</Nav.Link>
            <Nav.Link href="#pricing" style={{ marginLeft: '600px'}}>
                <Button variant="outline-danger" style={{ height: '30%', width: '60px', fontSize: '10px'}}>로그인</Button>{' '}
            </Nav.Link>
            <Nav.Link href="#pricing" >
                <Button variant="outline-danger" style={{ height: '30%', width: '60px', fontSize: '10px', padding: '10%'}}>회원가입</Button>{' '}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
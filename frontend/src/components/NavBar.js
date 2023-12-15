import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {deleteCookie, getCookie} from "../helpers/cookies"
import Button from 'react-bootstrap/esm/Button';
import {useNavigate} from "react-router-dom"
import { deleteLocalStorage } from '../helpers/localStorage';
import { isAuthenticated } from '../helpers/auth';


function Navigation() {

  const token = getCookie("token")
   
  const navigate = useNavigate()
  const handelLogout = ()=>{
    deleteCookie("token")
    deleteLocalStorage("user")
    navigate("/login")

  }
  return (
    <div>
    {isAuthenticated() && isAuthenticated().role === "user" && (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
        <Button onClick={()=>handelLogout()}>{token ? "logout" : "login"}</Button>
      </Container>
    </Navbar>
    )}
    {isAuthenticated() && isAuthenticated().role === "admin" && (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <Button onClick={()=>handelLogout()}>{token ? "logout" : "login"}</Button>
      </Container>
    </Navbar>
    )}
    
    </div>
  );
}

export default Navigation;
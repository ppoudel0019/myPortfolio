import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navbar.css'



const MyNavbar = () => {
    return (
        <>
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark"
   className="animate-navbar nav-theme justify-content-between">

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Projects</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </>
    )
}

export default MyNavbar

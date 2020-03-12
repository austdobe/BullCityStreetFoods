import React from 'react';
import {Navbar, Form, Button, FormControl, NavDropdown, Nav} from 'react-bootstrap'

const styling={
    nav:{
        backgroundColor: '#D8BFD8'
    }
}

function NavBar(){

    return(
        <Navbar expand="lg" style={styling.nav}>
            <Navbar.Brand href="#home">Bull City Street Foods</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto textCenter">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/calendar">Calendar</Nav.Link>
                    <Nav.Link href="/catering">Catering</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
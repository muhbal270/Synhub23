import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';

const NavbarComponent = ({ isLoggedIn }) => {
  return (
    <Navbar expand="lg" fixed="top" bg='white' className='mb-5'>
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex align-items-center">
            {isLoggedIn ? (
              <Nav.Link href="/home">Beranda</Nav.Link>
            ) : (
              <Nav.Link href="/">Beranda</Nav.Link>
            )}
            <NavDropdown title="Ruangan" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ruang-meeting">Ruang Meeting</NavDropdown.Item>
              <NavDropdown.Item href="/ruang-acara">Ruang Acara</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/cospace">Coworking</Nav.Link>
            
            {isLoggedIn ? (
              <>
                <Nav.Link href="/order">Pesanan</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle>
                    <FontAwesomeIcon icon={faCircleUser} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <Link to="/login" className="btn btn-teal">Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
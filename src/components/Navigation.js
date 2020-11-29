import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/kait-logo.png';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className='fixed-top' color="light" light expand="md">
        <Link className='nav-link' to='/'>
          <img className='logo' src={Logo} alt='k logo' />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className='nav-link' to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/about'>About</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/portfolio'>Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='fixed-top-margin'></div>
      <div className='fixed-top-margin-gradient'></div>
    </>
  );
};

export default Navigation;

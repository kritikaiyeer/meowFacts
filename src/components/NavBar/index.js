import React from 'react';
import { Nav, NavLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink>RANDOM CAT FACTS</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
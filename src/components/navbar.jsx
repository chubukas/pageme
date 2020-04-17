import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navbars = () => {
  const [collapse, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapse);

  return (
    <>
      <header>
        <Navbar className="fixed-top" expand="md" color="warning">
          <NavbarBrand href="/" className="mr-auto pl-5">
            <img
              src="/images/ebuka.jpg"
              alt="logo"
              className="rounded-circle"
              width="50"
              height="50"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-5">
            <span className="text-white">menu</span>
          </NavbarToggler>
          <Collapse isOpen={!collapse} navbar>
            <Nav navbar className=" ml-auto pr-5">
              <NavItem className="text-center">
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {/* <NavItem className="text-center">
                <NavLink href="/">Blog</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Navbars;

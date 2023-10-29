import React, { useState } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  return (
    <div>
      <Navbar expand="md" className="navbar_div" bg="dark" dark>
        <NavbarBrand
          className="navbar_title"
          to="/"
          style={{
            visibility: location.pathname === "/" ? "" : "visible",
          }}
        ></NavbarBrand>

        <NavbarToggler onClick={toggle} className="navbar_toggler" />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="container-fluid justify-content-end"
            navbar
            style={{ width: "100%" }}
          >
            <NavItem>
              <NavLink
                className={`navbar_links ${
                  location.pathname === "/" && "active"
                }`}
                href="/"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`navbar_links ${
                  location.pathname === "/events" && "active"
                }`}
                href="/events"
              >
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`navbar_links ${
                  location.pathname === "/contacts" && "active"
                }`}
              >
                Contact US
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`navbar_links ${
                  location.pathname === "/sponsors" && "active"
                }`}
              >
                Sponsors
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

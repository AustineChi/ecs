import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import searchIcon from "../images/search-icon.png";
import logo from "../images/logo.jpg";
import "./layout.css";

function Header() {
  return (
    <Navbar expand="lg" className="nav-style">
      <div className="container">
        <Navbar.Brand>
          <img src={logo} alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="mx-auto nav-search-section">
            <img src={searchIcon} alt="" className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por ubicación"
              className="search-box"
            />
          </div>

          <Nav className="py-1">
            <Nav.Link className="px-4 text">Historias</Nav.Link>
            <Nav.Link className="px-4 text">Sign In</Nav.Link>
            <Nav.Link className="px-4 pr-5 text">Sign Up</Nav.Link>
            <button className="btn">Add Your Church</button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "/images/logo.svg";
import "./Navbar.css"; // Import your custom CSS file

function Header({ user }) {
  // logout
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <Navbar
      expand="lg"
      className="navbar-container"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        height: "6.88rem",
        backgroundColor:"#000"
      }}
    >
      <Container className="container">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "#fff" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto nav-board ">
            <Nav.Link
              href={user ? "/participate" : "/login"}
              className="nav-link"
            >
              PARTICIPATE
            </Nav.Link>
            <Nav.Link href={user ? "/upload" : "/login"} className="nav-link">
              UPLOAD
            </Nav.Link>
            <Nav.Link href="/discover" className="nav-link">
              DISCOVER
            </Nav.Link>
            <Nav.Link href={user ? "/profile" : "/login"} className="nav-link">
              PROFILE
            </Nav.Link>
            <Nav.Link
              href="/login"
              disabled={user ? false : true}
              className="btn button nav-link"
            >
              {user?"JOIN US":"LOG IN"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

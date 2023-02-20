import React, { useEffect } from "react";
import { useState } from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);
  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    window.location.href = "/login";
  };
  let user = localStorage.getItem("inputvalue");
  console.log(user);
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="sm"
      
    >
      <>
        <Navbar.Brand className=" mx-2" id="navbar-content" href="/cardpro">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="navbar-content" href="#features">About</Nav.Link>
            <Nav.Link id="navbar-content" href="#pricing">Blog</Nav.Link>
            <Nav.Link id="navbar-content"  href="#pricing">Services</Nav.Link>
            <Nav.Link id="navbar-content" href="#pricing">Portfolio</Nav.Link>

            <Nav.Link id="navbar-content" href="#pricing">Contacts</Nav.Link>
            <Nav.Link id="navbar-content" href="#pricing">Back To Article</Nav.Link>

            <Nav.Link id="navbar-content" href="#pricing">Get this</Nav.Link>
          </Nav>
          <Nav>
            {/* The isAuthenticated variable is used to determine whether the user is authenticated */}
            <ul className="navbar-nav ms-auto">
              {isAuthenticated ? (
                <>
                  <button
                    class="btn btn-outline-info"
                    type="submit"
                    id="button1"
                  >
                    <Link
                      onClick={logout}
                      className="nav-link"
                      style={{ color: "#FDFEFF" }}
                    >
                      Log Out
                    </Link>
                  </button>
                  {/* <li className="nav-item">
                  <Link to="" className="nav-link">
                    Welcome to your anytime banking {user}
                  </Link>
                </li> */}
                </>
              ) : (
                <>
                  <li className="nav-item mx-2">
                    <button class="btn btn-success" type="submit" id="button1">
                      <Link
                        to="/register"
                        className="nav-link"
                        style={{ color: "#ffffff" }}
                      >
                        Register
                      </Link>
                    </button>
                  </li>

                  <li className="nav-item">
                    <button class="btn btn-success" type="submit" id="button2">
                      <Link
                        to="/login"
                        className="nav-link"
                        style={{ color: "#ffffff" }}
                      >
                        Login
                      </Link>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

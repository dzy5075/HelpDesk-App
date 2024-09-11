import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/helpdeskLogo.svg`}
            alt="HelpDesk Logo"
            width="300"
            height="80"
            className="d-inline-block align-top"
          />
        </Link>
        {/* Navbar toggle button for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Show Home/Form button if not logged in */}
            {!token && (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home/Form
                </Link>
              </li>
            )}
            {/* Show Login button if not logged in */}
            {!token && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {/* Show Tickets button and Logout button if logged in */}
            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Tickets
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

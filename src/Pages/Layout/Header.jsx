import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-warning" href="#">
            Admin Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-light">
                  Home Page
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mobile-section" className="nav-link text-light">
                  Mobile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/grocery-section" className="nav-link text-light">
                  Grocery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/furniture-section" className="nav-link text-light">
                  Furniture
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fashion-section" className="nav-link text-light">
                  Fashion
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/appliance-section" className="nav-link text-light">
                  Appliance
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/electronics-section" className="nav-link text-light">
                  Electronics
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid rounded-circle me-2"
                src="vetrikart_logo.png"
                alt="Logo"
                width={40}
              />
              <span className="text-white fw-bold">Welcome, Admin</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

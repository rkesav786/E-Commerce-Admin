import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin
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
                <Link to="/home" className="nav-link active">
                  Home Page
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/main" className="nav-link active">
                  Main Page
                </Link>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catagory
                </a>
                <ul
                  className="dropdown-menu p-3"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="nav-item">
                    <Link to="/mobile-section" className="nav-link active">
                      Mobile Section
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/grocery-section" className="nav-link active">
                      Grocery Section
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item">
                    <Link to="/furniture-section" className="nav-link active">
                      Furniture Section
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/fashion-section" className="nav-link active">
                      Fashion Section
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/furniture-section" className="nav-link active">
                      Appliance Section
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/fashion-section" className="nav-link active">
                      Electronics Section
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

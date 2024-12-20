import React from "react";
import { Link } from "react-router-dom";
import Main from "../Main/Main";

export const Header = () => {
  return (
    <div>
      <div className="d-flex possition-fixed">
        <nav
          className="bg-light border-end vh-100"
          style={{ width: "250px", minHeight: "100vh" }}
        >
          <div className="p-4">
            <h5 className="text-center text-primary">Admin</h5>
            <ul className="nav flex-column mt-3">
              <li className="nav-item">
                <Link to="/admin/main" className="nav-link text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="product" className="nav-link text-dark">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="header" className="nav-link text-dark">
                  Header
                </Link>
              </li>
              <li className="nav-item">
                <Link to="footer" className="nav-link text-dark">
                  Footer
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="p-4 flex-grow-1">
        <Main />
      </div>
    </div>
  );
};

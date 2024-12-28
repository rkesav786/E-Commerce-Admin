import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="container mt-5">
      {/* Dashboard Header */}
      <div className="text-center mb-4">
        <h1 className="display-6 fw-bold">Welcome to VetriKArt Admin Panel</h1>
        <p className="text-muted">Manage your e-commerce site efficiently!</p>
      </div>

      {/* Dashboard Sections */}
      <div className="row g-4">
        {/* Section: Home Page */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Home Page</h5>
              <p className="card-text">
                Manage banners, promotions, and featured products on the home
                page.
              </p>
              <Link to="/home-page" className="btn btn-primary">
                Manage Home Page
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Mobile Section */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Mobile Section</h5>
              <p className="card-text">
                Add, edit, or delete mobile product details.
              </p>
              <Link to="/mobile-section" className="btn btn-primary">
                Manage Mobile Section
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Fashion Section */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Fashion Section</h5>
              <p className="card-text">
                Manage clothing, accessories, and fashion-related items.
              </p>
              <Link to="/fashion-section" className="btn btn-primary">
                Manage Fashion Section
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Grocery Section */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Grocery Section</h5>
              <p className="card-text">Add or edit grocery product details.</p>
              <Link to="/grocery-section" className="btn btn-primary">
                Manage Grocery Section
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Appliance Section */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Appliance Section</h5>
              <p className="card-text">Manage home and kitchen appliances.</p>
              <Link to="/appliance-section" className="btn btn-primary">
                Manage Appliance Section
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Electronics Section */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Electronics Section</h5>
              <p className="card-text">
                Add or edit electronic products like laptops and TVs.
              </p>
              <Link to="/electronics-section" className="btn btn-primary">
                Manage Electronics Section
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

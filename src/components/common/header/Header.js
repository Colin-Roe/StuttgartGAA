import React from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../../images/stuttgart_logo-512x512.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-brand">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
          <div className="d-none d-md-block">
            <h2>Stuttgart GAA</h2>
          </div>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ml-auto">
          <NavLink to="/" activeClassName="activeLink" exact>
            Home
          </NavLink>
          {"  "}
          <NavLink to="/about" activeClassName="activeLink">
            About
          </NavLink>
          {"  "}
          <NavLink to="/training" activeClassName="activeLink">
            Training
          </NavLink>
          {"  "}
          <NavLink to="/event" activeClassName="activeLink">
            Events
          </NavLink>
          {"  "}
          <NavLink to="/contact" activeClassName="activeLink">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../../images/stuttgart_logo-512x512.png';

const Header = () => {
  const activeStyle = { color: '#fff' };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="Logo" className="logo-image" />
      </Link>
      <div className="d-none d-md-block">
        <h2>Stuttgart GAA</h2>
      </div>
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
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>
          {'  '}
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
          {'  '}
          <NavLink to="/training" activeStyle={activeStyle}>
            Training
          </NavLink>
          {'  '}
          <NavLink to="/event" activeStyle={activeStyle}>
            Events
          </NavLink>
          {'  '}
          <NavLink to="/contact" activeStyle={activeStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

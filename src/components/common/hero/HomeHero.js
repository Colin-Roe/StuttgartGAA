import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="hero hero-home">
        <a
          className="social-link"
          href="https://www.facebook.com/StuttgartGAA/"
          target="_blank"
          rel="noopener noreferrer"
          title="Stuttgart GAA Facebook Page"
        >
          <i className="fa fa-facebook" />
        </a>
        <div className="hero-inner">
          <h2>We Are a Hurling and Camogie Club</h2>
          <h3>Be Part of a Growing Sport</h3>
          <Link to="training" className="btn">
            Join Now
          </Link>
        </div>
        <div id="arrow">
          <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;

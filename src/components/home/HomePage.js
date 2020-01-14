import React from "react";
import { Link } from "react-router-dom";
import Hero from "../common/hero/HomeHero";

import Sponsor from "../../images/sponsor.png";

const HomePage = () => (
  <div>
    <Hero />
    <div id="second-section" className="jumbotron welcome">
      <h3>Welcome to</h3>
      <h1>Stuttgart GAA</h1>
      <p>Proudly Sponsored by OReillys Stuttgart</p>
      <div className="sponsor">
        <img src={Sponsor} alt="Logo" className="logo-image" />
      </div>
      <Link to="about" className="btn btn-primary-2 btn-lg">
        Learn More
      </Link>
    </div>
    <div className="container-fluid container-tournaments py-5">
      <div className="row no-gutters">
        <div className="col-12">
          <div className="container">
            <div className="row justify-content-md-center pb-md-5">
              <h3 className="text-uppercase">Upcoming Tournaments 2020</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6 square d-flex align-items-center justify-content-center tournament">
                <Link to="event" className="btn">
                  <div>Friendly Hurling Tournament</div>
                  <div>Strasbourg</div>
                  <div>February 29th 2020</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

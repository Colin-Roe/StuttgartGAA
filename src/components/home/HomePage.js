import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../common/hero/HomeHero';

import Sponsor from '../../images/sponsor.png';

const HomePage = () => (
  <div>
    <Hero />
    <div className="jumbotron welcome">
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
              <h1 className="text-uppercase">Tournaments</h1>
            </div>
            <div className="row ten-columns">
              <div className="col-sm-20 square d-flex align-items-center justify-content-center tournament">
                <div>Vienna</div>
                <div>May 4th 2019</div>
              </div>
              <div className="col-sm-20 square d-flex align-items-center justify-content-center tournament">
                <div>Belgium</div>
                <div>June 15th 2019</div>
              </div>
              <div className="col-sm-20 square d-flex align-items-center justify-content-center tournament">
                <div>Amsterdam</div>
                <div>July 13th 2019</div>
              </div>
              <div className="col-sm-20 square d-flex align-items-center justify-content-center tournament">
                <div>Copenhagen</div>
                <div>September 7th 2019</div>
              </div>
              <div className="col-sm-20 square d-flex align-items-center justify-content-center tournament">
                <div>Dresden</div>
                <div>October 5th 2019</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

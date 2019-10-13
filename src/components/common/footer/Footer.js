import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../footer/Footer.scss';

class Footer extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="footer d-flex align-items-center">
        <section className="container-fluid">
          <div className="row">
            <div className="col">
              Copyright Stuttgart GAA {this.showCurrentYear()} - All rights
              reserved.
            </div>
            <div className="col">
              <div className="float-right">
                <Link to="privacy" className="btn btn-primary">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;

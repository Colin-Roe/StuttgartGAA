import React from 'react';
import Header from '../common/header/Header';

import Promo from '../../images/stuttgart_promo_tournament_2019.jpg';

const EventPage = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <div className="row mt-5 mb-5">
          <div className="col-sm col-3">
            <h2>Stuttgart GAA Events</h2>
            <div className="card mt-3 mb-5 card-news">
              <div className="row no-gutters">
                <div className="col-md-4 mt-3 mb-3">
                  <img src={Promo} className="card-img img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Friendly Hurling Tournament</h5>
                    <p className="card-text">
                      This will be the third friendly tournament to be played
                      between Stuttgart GAA, Cologne Celtics GAA and Darmstadt
                      GAA with Zürich GAA joining us for the first time.
                    </p>
                    <p className="card-text">
                      Stuttgart GAA will be hosting their very first friendly
                      tournament. If you live in the region, please don&apos;t
                      miss the chance to come and watch. You might even get to
                      join in!
                    </p>
                    <p className="card-text">
                      Location: Sportplatz der Uni Hohenheim
                      <br />
                      Time: 26th October @ 12:30
                    </p>
                    <p className="card-text">
                      Food and drinks in O&apos;Reilly&apos;s Irish Pub
                      afterwards!
                      <br />
                      Address: Reuchlinstraße 27, 70176 Stuttgart
                    </p>
                    <a
                      href="https://www.facebook.com/StuttgartGAA/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Stuttgart GAA Facebook Page"
                      className="btn btn-primary"
                    >
                      Read more...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPage;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../common/hero/TrainingHero";

class TrainingPage extends Component {
  render() {
    const loadGoogleMapsApi = require("load-google-maps-api");

    function loadGoogleMapsApis() {
      return loadGoogleMapsApi({
        key: ""
      });
    }
    function createMap(googleMaps, mapElement) {
      return new googleMaps.Map(mapElement, {
        center: { lat: 48.715576, lng: 9.209176 },
        zoom: 14
      });
    }

    document.addEventListener("DOMContentLoaded", function() {
      let mapElement = document.getElementById("map");

      loadGoogleMapsApis().then(function(googleMaps) {
        createMap(googleMaps, mapElement);
      });
    });

    return (
      <div>
        <Hero />
        <section className="container">
          <div className="row mt-5">
            <div className="col-md-8 mb-3">
              <h2>Where</h2>
              <p>
                The primary training location for Stuttgart GAA is at Sportplatz
                der Universitat Hohenheim.
              </p>
              <p>The sports faciltiy has changing rooms with showers.</p>
              <p>
                If traveling from Haupbahnhof, you can take U7 to Ruhbank
                Fernsehturm, then take the No.70 bus to the Sportplatz. If
                traveling from West Stuttgart, you can take the U3 to Pleinigen
                and either walk or take the bus to the Sportsplatz.
              </p>
              <p>
                The secondary training location is Schlossgarten next to
                Hauptbahnhof and the Beer Garden.
              </p>
              <p>
                For up to date training details for each training session,
                please check our Facebook events or request to join our WhatsApp
                group.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Map</h2>
              <div id="mapp">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10529.865274336744!2d9.200767158496145!3d48.715680682907546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c301a672db97%3A0xfdd6725320e8b93f!2sSportplatz%20der%20uni%20Hohenheim!5e0!3m2!1sen!2sie!4v1569248939831!5m2!1sen!2sie"
                  width="auto"
                  height="350"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-8">
              <div className="mb-3">
                <h2>When</h2>
                <p>
                  Sportplatz der Universitat Hohenheim : Mondays at 18:00 -
                  19:30
                </p>
                <p>
                  Schlossgarten : Sundays at 12:00 - 13:00. Note: Only occurs
                  when we have sufficient numbers. For more up-to-date
                  information, please request to join our WhatsApp group.
                </p>
              </div>
              <div className="mb-3">
                <h2>What You Need</h2>
                <p>
                  We provide hurleys and helmets for training sessions. You need
                  only bring comfortable clothing, sports shoes and water.
                </p>
                <p className="lead">
                  <span className="font-weight-bold">Note:</span> For up to date
                  training details for each training session, please check our
                  Facebook events or request to join our WhatsApp group.
                </p>
              </div>
              <p className="lead">Disclaimer: Training may lead to beer.</p>
            </div>
            <div className="col-md-4" />
          </div>
        </section>
        <div id="jumbotron-join" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Join Stuttgart GAA</h1>
            <p className="lead">Play the fastest sport on grass.</p>
            <Link to="about" className="btn">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingPage;

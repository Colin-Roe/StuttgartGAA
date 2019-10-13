import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../common/hero/AboutHero';

import Secretary from '../../images/secretary_cr_200.jpg';

const AboutPage = () => (
  <div>
    <Hero />
    <section className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-8">
          <h2>Club History</h2>
          <p>
            Stuttgart GAA was founded in 2016, fully affiliated with Gaelic
            Athletic Association (GAA) since then and are growing every year.
            Word began to travel around the city that a GAA team had been
            created in Stuttgart and sure enough this attracted players from all
            regions of the world. The GAA team has offered a great opportunity
            to spread the knowledge and skills hurling has to offer while
            creating a great group of friends. Stuttgart GAA always welcomes new
            players/members who would like to contribute to the club! Please{' '}
            <Link to="contact" className="underline">
              contact us
            </Link>{' '}
            for any further information.
          </p>
          <p>Stuttgart Abú.</p>
          <h2>What is Hurling?</h2>
          <p>
            Hurling is an outdoor team game of ancient Gaelic and Irish origin.
            It is administered by the Gaelic Athletic Association (GAA). The
            object of the game is for players to use a wooden (ash) stick called
            a hurl/hurley to hit a small ball called a sliotar between the
            opponents goalposts either over the crossbar for one point, or under
            the crossbar into a net guarded by a goalkeeper for one goal, which
            is equivalent to three points.
          </p>
          <p>
            The sliotar can be caught in the hand and carried for not more than
            four steps, struck in the air, or struck on the ground with the
            hurl. It can be kicked, or slapped with an open hand (the hand pass)
            for short-range passing. A player who wants to carry the ball for
            more than four steps has to bounce or balance the sliotar on the end
            of the stick, and the ball can only be handled twice while in his
            possession.
          </p>
          <p>
            No protective padding is worn by players. A plastic protective
            helmet with a faceguard is mandatory
          </p>
          <p>
            Hurling is played throughout the world, and is popular among members
            of the Irish diaspora in North America, Europe, Australia, New
            Zealand, South Africa, Argentina, and South Korea. Hurling is
            becoming more popular every year in Germany thanks to the many clubs
            in the country.
          </p>
          <h2>What is Camogie?</h2>
          <p>
            Camogie is an Irish stick-and-ball team sport played by women; it is
            almost identical to the game of hurling played by men with a few
            different rules. Camogie is played by 100,000 women in Ireland and
            worldwide, largely among Irish communities.
          </p>
        </div>
        <div className="col-md-4 club-officals">
          <h2 className="text-center">Club Officials</h2>
          <ul>
            <li>
              <a
                href="mailTo:secretary.stuttgart.europe@gaa.ie"
                title="Email Dave"
              >
                <h3>Club Chairperson</h3>
              </a>
            </li>
            <li>
              <a
                href="mailTo:secretary.stuttgart.europe@gaa.ie"
                title="Email Colin"
              >
                <img
                  src={Secretary}
                  style={{ borderRadius: '50px!important' }}
                />
                <h3>Club Secretary</h3>
              </a>
            </li>
            <li>
              <a
                href="mailTo:secretary.stuttgart.europe@gaa.ie"
                title="Email Felix"
              >
                <h3>Club Treasurer</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3 mb-3" />
    </section>
    <div id="jumbotron-join" className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Join Stuttgart GAA</h1>
        <p className="lead">Play the fastest sport on grass.</p>
        <Link to="training" className="btn">
          Join Now
        </Link>
      </div>
    </div>
  </div>
);

export default AboutPage;

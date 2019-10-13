import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import TrainingPage from './training/TrainingPage';
import PrivacyPage from './privacy/PrivacyPage';
// import NewsPage from "./news/NewsPage";
import ContactPage from './contact/ContactPage';
import Footer from './common/footer/Footer';
// import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <div id="content-wrap">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/training" component={TrainingPage} />
          {/* <Route path="/news" component={NewsPage} /> */}
          <Route path="/contact" component={ContactPage} />
          {/* <Route component={PageNotFound} /> */}
          <Route path="/privacy" component={PrivacyPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

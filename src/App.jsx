import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage, AboutPage, HistoryPage, RecruitPage, ContactPage } from './pages';

const App = () => (
  <Router>
    <GlobalStyles />

    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/about">
        <AboutPage />
      </Route>

      <Route exact path="/history">
        <HistoryPage />
      </Route>

      <Route exact path="/recruit">
        <RecruitPage />
      </Route>

      <Route exact path="/contact">
        <ContactPage />
      </Route>
    </Switch>
  </Router>
);

export default App;

import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import AboutPage from './pages/About';
import HistoryPage from './pages/History';

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
    </Switch>
  </Router>
);

export default App;

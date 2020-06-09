import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import AboutPage from './pages/About';

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
    </Switch>
  </Router>
);

export default App;

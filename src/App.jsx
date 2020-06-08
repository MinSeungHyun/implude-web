import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';

const App = () => (
  <Router>
    <GlobalStyles />

    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  </Router>
);

export default App;

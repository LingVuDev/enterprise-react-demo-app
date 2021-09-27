import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  );
};

export default Routes;

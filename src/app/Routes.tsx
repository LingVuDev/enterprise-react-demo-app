import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './layouts/dashboard-layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardDefaultContent from './views/dashboard/DashboardDefaultContent';
import SettingsAndPrivacy from './views/dashboard/SettingsAndPrivacy';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route
        path="/dashboard"
        render={({ match: { path } }) => (
          <Dashboard>
            <Switch>
              <Route
                exact
                path={path + '/'}
                component={DashboardDefaultContent}
              />
              <Route
                exact
                path={path + '/settings-and-privacy'}
                component={SettingsAndPrivacy}
              />
            </Switch>
          </Dashboard>
        )}
      ></Route>
      <Route exact path="/not-found" component={NotFoundPage} />
      <Redirect exact from="*" to="/not-found" />
    </Switch>
  );
};

export default Routes;

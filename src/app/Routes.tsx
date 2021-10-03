import { LinearProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './layouts/dashboard-layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsAndPrivacy from './views/dashboard/SettingsAndPrivacy';

const Routes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/about"
          component={lazy(() => import('./pages/AboutPage'))}
        />
        <Route
          path="/dashboard"
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route
                  exact
                  path={path + '/'}
                  component={lazy(
                    () => import('./views/dashboard/DashboardDefaultContent'),
                  )}
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
    </Suspense>
  );
};

export default Routes;

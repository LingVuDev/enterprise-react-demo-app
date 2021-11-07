import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsAndPrivacy from './views/dashboard/SettingsAndPrivacy';
import { LinearProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <MainLayout>
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
              <DashboardLayout>
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
                  <Route
                    exact
                    path={path + '/list-products'}
                    component={lazy(
                      () => import('./views/dashboard/product/ProductListView'),
                    )}
                  />
                  <Route
                    exact
                    path={path + '/create-product'}
                    component={lazy(
                      () =>
                        import('./views/dashboard/product/ProductCreateView'),
                    )}
                  />
                </Switch>
              </DashboardLayout>
            )}
          ></Route>
          <Route exact path="/not-found" component={NotFoundPage} />
          <Redirect exact from="*" to="/not-found" />
        </Switch>
      </Suspense>
    </MainLayout>
  );
};

export default Routes;

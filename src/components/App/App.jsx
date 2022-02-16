import { Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { publicRoutes, routePaths } from '../../router/routes';
import { Layout } from '../Layout';

const App = () => {
  return (
    <Router basename="/carsharing-app">
      <Suspense fallback={<div>Зазрузка...</div>}>
        <Layout>
          <ErrorBoundary fallback={<div>Что-то пошло не так...</div>}>
            <Switch>
              {publicRoutes.map((route) => (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  key={route.path}
                />
              ))}
              <Redirect to={routePaths.mainPage} />
            </Switch>
          </ErrorBoundary>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;

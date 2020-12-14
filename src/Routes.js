import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import SinglePostContainer from './containers/SinglePostContainer/SinglePostContainer';
import RoutesConfig from './config/routes';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={RoutesConfig.SINGLE_POST}>
          <SinglePostContainer />
        </Route>
        <Route path={RoutesConfig.MAIN}>
          <MainContainer />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
};

export default Routes;

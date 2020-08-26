import React from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { history } from '../../helpers/history';
import Catalogue from '../../pages/Catalogue/Catalogue';
import Checkout from '../../pages/Checkout/Checkout';
import Home from '../../pages/Home/Home';

//TODO:Create a helper for routesURLs
const MainRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/arcanum-catalogue" exact component={Home} />
      <Route path="/arcanum-catalogue/catalogue" exact component={Catalogue} />
      <Route path="/arcanum-catalogue/checkout" exact component={Checkout} />
      <Route component={() => <Redirect to="/arcanum-catalogue" />} />
    </Switch>
  </Router>
);

export default MainRouter;

import React from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { history } from '../../helpers/history';
import Catalogue from '../../pages/Catalogue/Catalogue';
import Checkout from '../../pages/Checkout/Checkout';
import Home from '../../pages/Home/Home'

const MainRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalogue" exact component={Catalogue} />
      <Route path="/checkout" exact component={Checkout} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  </Router>
);

export default MainRouter;

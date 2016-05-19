import React from 'react';
import Welcome from'../components/Welcome';
import ApplicationLayout from '../components/layouts/ApplicationLayout';
import Router from'react-router';
import {Route, IndexRoute} from'react-router';
import SignUp from '../components/SignUp';

export default (
  <Route path="/" component={ApplicationLayout}>
    <Route path="sign-up" component={SignUp} />
    <IndexRoute component={Welcome} />
  </Route>
);

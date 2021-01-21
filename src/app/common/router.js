import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../admin/dashboard'
import withSecurity from '../security/withSecurity'
import Callback from '../security/callback'

const Router = () => (
    <Switch>
        <Route exact path="/" component={withSecurity(Dashboard)} />
        <Route exact path="/callback" component={Callback} />
        <Redirect to="/" />
    </Switch>
);

export default Router;
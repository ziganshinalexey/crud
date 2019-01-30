// @flow
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainRoute} from './MainRoute';
import {NoMatchRouter} from './NoMatchRouter';

export const AppRouter = () => (
    <Switch>
        <Route component={MainRoute} exact path="/" />
        <Route component={NoMatchRouter} />
    </Switch>
);

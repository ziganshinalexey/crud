// @flow
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MainRoute} from './MainRoute';
import {CreateRoute} from './CreateRoute';
import {EditRoute} from './EditRoute';
import {NoMatchRouter} from './NoMatchRouter';

export const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route component={MainRoute} exact path="/" />
            <Route component={CreateRoute} path="/create" />
            <Route component={EditRoute} path="/edit/:invoiceId" />
            <Route component={NoMatchRouter} />
        </Switch>
    </BrowserRouter>
);

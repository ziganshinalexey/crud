// @flow
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {InvoicesLayout} from 'modules/invoices/components/InvoicesLayout';
import {CreateLayout} from 'modules/invoices/components/CreateLayout';
import {EditLayout} from 'modules/invoices/components/EditLayout';
import {NoMatchRouter} from './NoMatchRouter';
import {itemId} from 'app/constants';

export const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route component={InvoicesLayout} exact path="/" />
            <Route component={CreateLayout} path="/create" />
            <Route component={EditLayout} path={'/edit/:' + itemId + '/'} />
            <Route component={NoMatchRouter} />
        </Switch>
    </BrowserRouter>
);

// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {RootContainer} from 'app/containers/Root';
import {createAppStore} from 'app/store';
import './style.less';

const root = document.getElementById('root');

if (!root) {
    throw Error('Cannot find #root');
}

const store = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RootContainer />
        </BrowserRouter>
    </Provider>,
    root
);

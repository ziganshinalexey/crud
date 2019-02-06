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

function render(App) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        root
    );
}

render(RootContainer);

if (module.hot) {
    module.hot.accept('app/containers/Root', () => render(RootContainer));
}

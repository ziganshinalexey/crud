// @flow
import {applyMiddleware, compose, createStore} from 'redux';

type TStoreArgs = {
    debug: boolean,
    initialState?: $ReadOnly<{}>,
    middlewares: Function[],
    reducer: Function,
};

export function makeStore({debug, initialState, middlewares, reducer}: TStoreArgs) {
    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            debug && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
        )
    );
}

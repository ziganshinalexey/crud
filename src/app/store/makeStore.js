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
            debug && window.devToolsExtension ? window.devToolsExtension() : (f) => f
        )
    );
}

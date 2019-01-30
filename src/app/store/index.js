// @flow
import {rootReducer} from 'app/reducers';
import thunk from 'redux-thunk';
import {makeStore} from './makeStore';

export function createAppStore() {
    const extraArgs = {};

    return makeStore({
        debug: 'production' !== process.env.NODE_ENV,
        middlewares: [thunk.withExtraArgument(extraArgs)],
        reducer: rootReducer,
    });
}

// @flow
import {rootReducer} from 'app/reducers';
import {ExampleApi} from 'modules/example/services/ExampleApi';
import thunk from 'redux-thunk';
import {makeStore} from './makeStore';

export function createAppStore() {
    const extraArgs = {
        exampleApi: new ExampleApi(),
    };

    return makeStore({
        debug: 'production' !== process.env.NODE_ENV,
        middlewares: [thunk.withExtraArgument(extraArgs)],
        reducer: rootReducer,
    });
}

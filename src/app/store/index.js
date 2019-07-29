// @flow
import {rootReducer} from 'app/reducers';
import {InvoiceApi} from 'modules/invoices/services/api';
import thunk from 'redux-thunk';
import {makeStore} from './makeStore';

export function createAppStore() {
    const extraArgs = {
        invoiceApi: new InvoiceApi(),
    };

    const store = makeStore({
        debug: 'production' !== process.env.NODE_ENV,
        middlewares: [thunk.withExtraArgument(extraArgs)],
        reducer: rootReducer,
    });

    if (module.hot) {
        module.hot.accept('app/reducers', () => store.replaceReducer(rootReducer));
    }

    return store;
}

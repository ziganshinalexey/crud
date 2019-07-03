// @flow
import {combineReducers} from 'redux';
import {invoiceReducers} from 'modules/invoices/reducers';
import {INVOICE_MODULE_NAME} from 'modules/invoices/constants';

export const rootReducer = combineReducers({
    [INVOICE_MODULE_NAME]: invoiceReducers,
});

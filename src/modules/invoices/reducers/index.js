// @flow
import {combineReducers} from 'redux';
import {invoiceReducer} from 'modules/invoices/reducers/invoices';

export const invoiceReducers = combineReducers({
    invoices: invoiceReducer,
});

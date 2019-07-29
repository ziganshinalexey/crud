// @flow
import {INVOICE_MODULE_NAME} from 'modules/invoices/constants';
import type {TRootState} from 'modules/types';
import {createSelector} from 'reselect';

export function selectModule(state: TRootState) {
    return state[INVOICE_MODULE_NAME];
}

export function selectInvoiceState(state: TRootState) {
    return selectModule(state).invoices;
}

export function selectInvoiceData(state: TRootState) {
    return selectInvoiceState(state).data;
}

export function selectInvoiceIsLoading(state: TRootState) {
    return selectInvoiceState(state).isLoading;
}

const selectId = (state, {id}) => id;

export const selectInvoiceById = createSelector(
    [selectInvoiceData, selectId],
    (data, id) => data.find((item) => item.id === id)
);

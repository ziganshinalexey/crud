// @flow
import {INVOICE_ACTION_TYPE} from 'modules/invoices/constants';
import type {TThunkAction} from 'modules/types';
import type {TInvoiceItem, TInvoiceItemId} from 'modules/invoices/reducers/invoices';

// ------------ GET --------------
function getInvoiceStart() {
    return {
        type: INVOICE_ACTION_TYPE.GET_INVOICE_START,
    };
}

function getInvoiceSuccess(data) {
    return {
        payload: data,
        type: INVOICE_ACTION_TYPE.GET_INVOICE_SUCCESS,
    };
}

export function getInvoice(): TThunkAction {
    return async (dispatch, getState, {invoiceApi}) => {
        dispatch(getInvoiceStart());
        const data = await invoiceApi.getInvoice();
        dispatch(getInvoiceSuccess(data));
    };
}

// ------------ CREATE --------------
function createInvoiceStart() {
    return {
        type: INVOICE_ACTION_TYPE.CREATE_INVOICE_START,
    };
}

function createInvoiceSuccess(newInvoice) {
    return {
        payload: newInvoice,
        type: INVOICE_ACTION_TYPE.CREATE_INVOICE_SUCCESS,
    };
}

export function createInvoice(invoice: TInvoiceItem): TThunkAction {
    return async (dispatch, getState, {invoiceApi}) => {
        dispatch(createInvoiceStart());
        const newInvoice = await invoiceApi.createInvoice(invoice);
        dispatch(createInvoiceSuccess(newInvoice));
    };
}

// ------------ DELETE --------------
function deleteInvoiceStart() {
    return {
        type: INVOICE_ACTION_TYPE.DELETE_INVOICE_START,
    };
}

function deleteInvoiceSuccess(id) {
    return {
        payload: id,
        type: INVOICE_ACTION_TYPE.DELETE_INVOICE_SUCCESS,
    };
}

export function deleteInvoice(id: TInvoiceItemId): TThunkAction {
    return async (dispatch, getState, {invoiceApi}) => {
        dispatch(deleteInvoiceStart());
        await invoiceApi.deleteInvoice(id);
        dispatch(deleteInvoiceSuccess(id));
    };
}

// ------------ UPDATE --------------
function updateInvoiceStart() {
    return {
        type: INVOICE_ACTION_TYPE.UPDATE_INVOICE_START,
    };
}

function updateInvoiceSuccess(invoiceToUpdate) {
    return {
        payload: invoiceToUpdate,
        type: INVOICE_ACTION_TYPE.UPDATE_INVOICE_SUCCESS,
    };
}

export const updateInvoice = (invoice: TInvoiceItem): TThunkAction => {
    return async (dispatch, getState, {invoiceApi}) => {
        dispatch(updateInvoiceStart());
        const updatedInvoice = await invoiceApi.updateInvoice(invoice);
        // mapping
        dispatch(updateInvoiceSuccess(updatedInvoice));
    };
};

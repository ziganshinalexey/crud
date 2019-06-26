// @flow
import {INVOICE_ACTION_TYPE} from 'modules/invoices/constants';
import type {TThunkAction} from 'modules/types';
import type {TInvoiceData, TInvoiceItem, TInvoiceItemId} from 'modules/invoices/reducers/invoices';

const dataKeys = [
    {backendName: 'id', frontendName: 'id'},
    {backendName: 'number', frontendName: 'number'},
    {backendName: 'date_created', frontendName: 'dateCreated'},
    {backendName: 'date_supply', frontendName: 'dateSupply'},
    {backendName: 'comment', frontendName: 'comment'},
];

const Direction = {
    Backend: 'backendName',
    Frontend: 'frontendName',
};

type TInvoice = TInvoiceData | TInvoiceItem;

// direction = frontendName | backendName
function renameKeys(data: TInvoice, keys: Array<Object>, direction: string) {
    if (data.constructor === Array) {
        const renameKeys = data.map((dataItem) =>
            Object.keys(dataItem).reduce(
                (acc, item, index) => ({
                    ...acc,
                    ...{[keys[index][direction]]: dataItem[item]},
                }),
                {}
            )
        );
        return renameKeys;
    } else if (data.constructor === Object) {
        const renameKeys = Object.keys(data).reduce(
            (acc, item, index) => ({
                ...acc,
                ...{[keys[index][direction]]: data[item]},
            }),
            {}
        );
        return renameKeys;
    } else {
        return data;
    }
}

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
        const frontendData = renameKeys(data, dataKeys, Direction.Frontend);
        dispatch(getInvoiceSuccess(frontendData));
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
        const backendInvoice = renameKeys(invoice, dataKeys, Direction.Backend);
        const newInvoice = await invoiceApi.createInvoice(backendInvoice);
        const frontendInvoice = renameKeys(newInvoice, dataKeys, Direction.Frontend);
        dispatch(createInvoiceSuccess(frontendInvoice));
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
        const backendInvoice = renameKeys(invoice, dataKeys, Direction.Backend);
        const updatedInvoice = await invoiceApi.updateInvoice(backendInvoice);
        const frontendInvoice = renameKeys(updatedInvoice, dataKeys, Direction.Frontend);
        dispatch(updateInvoiceSuccess(frontendInvoice));
    };
};

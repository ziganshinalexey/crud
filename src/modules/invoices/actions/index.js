// @flow
import {INVOICE_ACTION_TYPE} from 'modules/invoices/constants';
import type {TThunkAction} from 'modules/types';
import type {TInvoiceItem, TInvoiceItemId} from 'modules/invoices/reducers/invoices';

const dataKeys = [
    {backendName: 'comment', frontendName: 'comment'},
    {backendName: 'date_created', frontendName: 'dateCreated'},
    {backendName: 'date_supply', frontendName: 'dateSupply'},
    {backendName: 'id', frontendName: 'id'},
    {backendName: 'number', frontendName: 'number'},
];

type TDirectionName = 'frontendName' | 'backendName';
type TMapDirectionItem = {
    from: TDirectionName,
    to: TDirectionName,
};

const mapDirection: {[direction: string]: TMapDirectionItem} = {
    backend: {
        from: 'frontendName',
        to: 'backendName',
    },
    frontend: {
        from: 'backendName',
        to: 'frontendName',
    },
};

// type TInvoice = TInvoiceData | TInvoiceItem;

function mapNames(data, direction: TMapDirectionItem) {
    if (!direction) {
        return data;
    }

    const {from, to} = direction;

    return Object.entries(data).reduce((acc, [name, value]) => {
        const mapData = dataKeys.find((item) => item[from] === name);
        const newName = mapData && mapData[to] ? mapData[to] : name;

        return {
            ...acc,
            [newName]: value,
        };
    }, {});
}

function mapListNames(list, direction: TMapDirectionItem) {
    return list.map((item) => mapNames(item, direction));
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
        const frontendData = mapListNames(data, mapDirection.frontend);
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
        const backendInvoice = mapNames(invoice, mapDirection.backend);
        const newInvoice = await invoiceApi.createInvoice(backendInvoice);
        const frontendInvoice = mapNames(newInvoice, mapDirection.frontend);
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
        const backendInvoice = mapNames(invoice, mapDirection.backend);
        const updatedInvoice = await invoiceApi.updateInvoice(backendInvoice);
        const frontendInvoice = mapNames(updatedInvoice, mapDirection.frontend);
        dispatch(updateInvoiceSuccess(frontendInvoice));
    };
};

// @flow
import {INVOICE_ACTION_TYPE} from 'modules/invoices/constants/';

export type TInvoiceItemId = string;

export type TInvoiceItem = {
    comment: string,
    dateCreated: string,
    dateSupply: string,
    id: TInvoiceItemId,
    name: string,
};

export type TInvoiceData = Array<TInvoiceItem>;

export type TInvoiceState = $ReadOnly<{|
    data: TInvoiceData,
    isLoading: boolean,
|}>;

type TInvoice = TInvoiceData | TInvoiceItem | TInvoiceItemId;

export type TActionGetInvoiceStart = {type: INVOICE_ACTION_TYPE.GET_INVOICE_START};
export type TActionGetInvoiceFail = {type: INVOICE_ACTION_TYPE.GET_INVOICE_FAIL};
export type TActionGetInvoiceSuccess = {payload: TInvoice, type: INVOICE_ACTION_TYPE.GET_INVOICE_SUCCESS};

export type TActionCreateInvoiceStart = {type: INVOICE_ACTION_TYPE.CREATE_INVOICE_START};
export type TActionCreateInvoiceFail = {type: INVOICE_ACTION_TYPE.CREATE_INVOICE_FAIL};
export type TActionCreateInvoiceSuccess = {payload: TInvoice, type: INVOICE_ACTION_TYPE.CREATE_INVOICE_SUCCESS};

export type TActionDeleteInvoiceStart = {type: INVOICE_ACTION_TYPE.DELETE_INVOICE_START};
export type TActionDeleteInvoiceFail = {type: INVOICE_ACTION_TYPE.DELETE_INVOICE_FAIL};
export type TActionDeleteInvoiceSuccess = {payload: TInvoice, type: INVOICE_ACTION_TYPE.DELETE_INVOICE_SUCCESS};

export type TActionUpdateInvoiceStart = {type: INVOICE_ACTION_TYPE.UPDATE_INVOICE_START};
export type TActionUpdateInvoiceFail = {type: INVOICE_ACTION_TYPE.UPDATE_INVOICE_FAIL};
export type TActionUpdateInvoiceSuccess = {payload: TInvoice, type: INVOICE_ACTION_TYPE.UPDATE_INVOICE_SUCCESS};

type TInvoiceAction =
    | TActionGetInvoiceStart
    | TActionGetInvoiceFail
    | TActionGetInvoiceSuccess
    | TActionCreateInvoiceSuccess
    | TActionCreateInvoiceFail
    | TActionCreateInvoiceStart
    | TActionDeleteInvoiceSuccess
    | TActionDeleteInvoiceFail
    | TActionDeleteInvoiceStart
    | TActionUpdateInvoiceSuccess
    | TActionUpdateInvoiceFail
    | TActionUpdateInvoiceStart;

export const initialState: TInvoiceState = {
    data: [],
    isLoading: false,
};

const reducer = {
    // ------------------- GET -------------------
    [INVOICE_ACTION_TYPE.GET_INVOICE_FAIL](state) {
        return {
            ...state,
            isLoading: false,
        };
    },
    [INVOICE_ACTION_TYPE.GET_INVOICE_START](state) {
        return {
            ...state,
            isLoading: true,
        };
    },
    [INVOICE_ACTION_TYPE.GET_INVOICE_SUCCESS](state, {payload}) {
        return {
            ...state,
            data: payload,
            isLoading: false,
        };
    },
    // ------------------- CREATE -------------------
    [INVOICE_ACTION_TYPE.CREATE_INVOICE_FAIL](state) {
        return {
            ...state,
            isLoading: false,
        };
    },
    [INVOICE_ACTION_TYPE.CREATE_INVOICE_START](state) {
        return {
            ...state,
            isLoading: true,
        };
    },
    [INVOICE_ACTION_TYPE.CREATE_INVOICE_SUCCESS](state, {payload}) {
        return {
            ...state,
            data: [...state.data, payload],
            isLoading: false,
        };
    },
    // ------------------- DELETE -------------------
    [INVOICE_ACTION_TYPE.DELETE_INVOICE_FAIL](state) {
        return {
            ...state,
            isLoading: false,
        };
    },
    [INVOICE_ACTION_TYPE.DELETE_INVOICE_START](state) {
        return {
            ...state,
            isLoading: true,
        };
    },
    [INVOICE_ACTION_TYPE.DELETE_INVOICE_SUCCESS](state, {payload}) {
        return {
            ...state,
            data: state.data.filter((item) => item.id !== payload),
            isLoading: false,
        };
    },
    // ------------------- UPDATE -------------------
    [INVOICE_ACTION_TYPE.UPDATE_INVOICE_FAIL](state) {
        return {
            ...state,
            isLoading: false,
        };
    },
    [INVOICE_ACTION_TYPE.UPDATE_INVOICE_START](state) {
        return {
            ...state,
            isLoading: true,
        };
    },
    [INVOICE_ACTION_TYPE.UPDATE_INVOICE_SUCCESS](state, {payload}) {
        return {
            ...state,
            data: state.data.reduce((accumulator, item) => [...accumulator, payload.id === item.id ? payload : item], []),
            isLoading: false,
        };
    },
};

export function invoiceReducer(state: TInvoiceState = initialState, {payload, type}: TInvoiceAction = {}) {
    if (reducer) {
        return type in reducer ? reducer[type](state, {payload, type}) : state;
    }
}

// @flow
import type {TInvoiceState} from 'modules/invoices/reducers/invoices';
import type {InvoiceApi} from 'modules/invoices/services/api';

// from extra args
type TExtraArgs = {
    invoiceApi: InvoiceApi,
};

type TPromiseAction = Promise<Object>;
type TGetState = () => any;
type TDispatch = (action: Object | TThunkAction | TPromiseAction | Array<Object>) => any;
export type TThunkAction = (dispatch: TDispatch, getState: TGetState, extraArgs: TExtraArgs) => any;

// from root reducer
export type TRootState = {
    invoice: {
        invoice: TInvoiceState,
    },
};

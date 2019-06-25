// @flow
import type {TInvoiceItem, TInvoiceItemId} from 'modules/invoices/reducers/invoices';

export class InvoiceApi {
    async getInvoice() {
        return await (await fetch('http://localhost:3000/invoices')).json();
    }

    async createInvoice(data: TInvoiceItem): Promise<{data: TInvoiceItem}> {
        return await (await fetch('http://localhost:3000/invoices', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
        })).json();
    }

    async updateInvoice(data: TInvoiceItem): Promise<{data: TInvoiceItem}> {
        const invoiceId = data.id;
        return await (await fetch(`http://localhost:3000/invoices/${invoiceId}`, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PATCH',
        })).json();
    }

    async deleteInvoice(id: TInvoiceItemId) {
        return await (await fetch(`http://localhost:3000/invoices/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'delete',
        })).json();
    }
}

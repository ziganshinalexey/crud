// @flow
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import type {TInvoiceData, TInvoiceItem} from 'modules/invoices/reducers/invoices';
import {withRouter} from 'react-router-dom';
import {getInvoice as getItemList} from 'modules/invoices/actions';
import {updateInvoice as updateItem} from 'modules/invoices/actions';
import {selectInvoiceById, selectInvoiceData, selectInvoiceIsLoading} from 'modules/invoices/selectors';
import {MainHeader} from 'modules/common/components/MainHeader';
import {Wrapper} from 'modules/common/components/Wrapper';
import {FormLayout} from 'modules/invoices/components/FormLayout';

type TProps = {
    getItemList: typeof getItemList,
    invoiceData: TInvoiceItem,
    invoiceList: TInvoiceData,
    invoiceListIsLoading: boolean,
    updateItem: typeof updateItem,
};

class EditContainer extends React.Component<TProps> {
    componentDidMount() {
        const {getItemList, invoiceList, invoiceListIsLoading} = this.props;

        if (!invoiceList.length && !invoiceListIsLoading) {
            getItemList();
        }
    }

    render() {
        const {invoiceData, updateItem} = this.props;
        return (
            <>
                <MainHeader text="Edit" />
                <Wrapper>
                    <FormLayout data={invoiceData} onSubmit={updateItem} />
                </Wrapper>
            </>
        );
    }
}

export const EditLayout = compose(
    withRouter,
    connect(
        (
            state,
            {
                match: {
                    params: {invoiceID: id},
                },
            }
        ) => ({
            invoiceData: selectInvoiceById(state, {id}),
            invoiceList: selectInvoiceData(state),
            invoiceListIsLoading: selectInvoiceIsLoading(state),
        }),
        {
            getItemList,
            updateItem,
        }
    )
)(EditContainer);

// @flow
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import type {TInvoiceItem} from 'modules/invoices/reducers/invoices';
import {withRouter} from 'react-router-dom';
import {updateInvoice as updateItem} from 'modules/invoices/actions';
import {selectInvoiceById} from 'modules/invoices/selectors';
import {MainHeader} from 'modules/common/components/MainHeader';
import {Wrapper} from 'modules/common/components/Wrapper';
import {FormLayout} from 'modules/invoices/components/FormLayout';

type TProps = {
    dataItem: TInvoiceItem,
    updateItem: typeof updateItem,
};

class EditContainer extends React.Component<TProps> {
    render() {
        const {dataItem, updateItem} = this.props;
        return (
            <>
                <MainHeader>Edit</MainHeader>
                <Wrapper>
                    <FormLayout data={dataItem} onSubmit={updateItem} />
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
                    params: {invoiceId: id},
                },
            }
        ) => ({
            dataItem: selectInvoiceById(state, {id}),
        }),
        {
            updateItem,
        }
    )
)(EditContainer);

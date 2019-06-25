// @flow
import React from 'react';
import {selectInvoiceData} from 'modules/invoices/selectors';
import {createInvoice as createItem} from 'modules/invoices/actions';
import {MainHeader} from 'modules/common/components/MainHeader';
import {Wrapper} from 'modules/common/components/Wrapper';
import {FormLayout} from 'modules/invoices/components/FormLayout';
import connect from 'react-redux/es/connect/connect';
import {compose} from 'redux';

type TProps = {
    createItem: typeof createItem,
};

class CreateContainer extends React.Component<TProps> {
    render() {
        return (
            <>
                <MainHeader text="Create" />
                <Wrapper>
                    <FormLayout onSubmit={this.props.createItem} />
                </Wrapper>
            </>
        );
    }
}

export const CreateLayout = compose(
    connect(
        (state) => {
            return {
                invoices: selectInvoiceData(state),
            };
        },
        {
            createItem,
        }
    )
)(CreateContainer);

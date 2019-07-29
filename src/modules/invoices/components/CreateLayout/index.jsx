// @flow
import React from 'react';
import {createInvoice as createItem} from 'modules/invoices/actions';
import {MainHeader} from 'modules/common/components/MainHeader';
import {Wrapper} from 'modules/common/components/Wrapper';
import {FormLayout} from 'modules/invoices/components/FormLayout';
import {connect} from 'react-redux';
import {compose} from 'redux';

type TProps = {
    createItem: typeof createItem,
};

class CreateContainer extends React.Component<TProps> {
    render() {
        return (
            <>
                <MainHeader>Create</MainHeader>
                <Wrapper>
                    <FormLayout onSubmit={this.props.createItem} />
                </Wrapper>
            </>
        );
    }
}

export const CreateLayout = compose(
    connect(
        null,
        {createItem}
    )
)(CreateContainer);

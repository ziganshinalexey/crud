// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {getInvoice as getItemList} from 'modules/invoices/actions';
import type {TInvoiceData} from 'modules/invoices/reducers/invoices';
import {selectInvoiceData, selectInvoiceIsLoading} from 'modules/invoices/selectors/';

import {Table} from 'modules/common/components/Table';
import {Header} from 'modules/common/components/Header';
import {MainHeader} from 'modules/common/components/MainHeader';
import {Wrapper} from 'modules/common/components/Wrapper';
import buttonStyles from 'modules/common/components/Button/styles.local.less';

type TProps = {
    getItemList: typeof getItemList,
    itemList: TInvoiceData,
    itemListIsLoading: boolean,
};

class InvoicesContainer extends Component<TProps> {
    componentDidMount() {
        const {getItemList, itemList, itemListIsLoading} = this.props;

        if (!itemList.length && !itemListIsLoading) {
            getItemList();
        }
    }

    render() {
        return (
            <>
                <MainHeader>Invoices</MainHeader>
                <Wrapper>
                    <Header>Actions</Header>
                    <Link className={buttonStyles.container} to="/create/">
                        Add new
                    </Link>
                </Wrapper>
                <Wrapper>
                    <Header>Invoices</Header>
                    <Table array={this.props.itemList} />
                </Wrapper>
            </>
        );
    }
}

export const InvoicesLayout = compose(
    connect(
        (state) => {
            return {
                itemList: selectInvoiceData(state),
                itemListIsLoading: selectInvoiceIsLoading(state),
            };
        },
        {
            getItemList,
        }
    )
)(InvoicesContainer);

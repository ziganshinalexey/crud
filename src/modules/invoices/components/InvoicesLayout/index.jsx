// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {getInvoice as getItemList} from 'modules/invoices/actions';
import {deleteInvoice as deleteItem} from 'modules/invoices/actions/';
import type {TInvoiceData} from 'modules/invoices/reducers/invoices';
import {selectInvoiceData, selectInvoiceIsLoading} from 'modules/invoices/selectors/';

import {Table} from 'modules/common/components/Table';
import Actions from 'modules/common/components/Table/actions';
import {Header} from 'modules/common/components/Header';
import {MainHeader} from 'modules/common/components/MainHeader';
import {Wrapper} from 'modules/common/components/Wrapper';
import buttonStyles from 'modules/common/components/Button/styles.local.less';

type TProps = {
    deleteItem: typeof deleteItem,
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

    handleDelete = async (id) => {
        await this.props.deleteItem(id);
    };

    render() {
        const columns = [
            {
                dataIndex: 'dateCreated',
                key: 'dateCreated',
                title: 'Create',
            },
            {
                dataIndex: 'number',
                key: 'number',
                title: 'Number',
            },
            {
                dataIndex: 'dateSupply',
                key: 'dateSupply',
                title: 'Supply',
            },
            {
                dataIndex: 'comment',
                key: 'comment',
                title: 'Comment',
            },
            {
                dataIndex: 'action',
                key: 'action',
                render: (text, record) => <Actions id={record.id} onDelete={this.handleDelete} />,
                title: 'Action',
            },
        ];

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
                    <Table dataColumns={columns} dataList={this.props.itemList} />
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
            deleteItem,
            getItemList,
        }
    )
)(InvoicesContainer);

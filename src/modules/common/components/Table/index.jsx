// @flow
import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {compose} from 'redux';
import {selectInvoiceData} from 'modules/invoices/selectors';
import {deleteInvoice as deleteItem} from 'modules/invoices/actions/';
import {withRouter} from 'react-router-dom';
import type {TInvoiceData} from 'modules/invoices/reducers/invoices';
import {Table as AntTable} from 'antd';
import Actions from 'modules/common/components/Table/Actions';
import styles from './styles.local.less';

type TProps = {
    data: TInvoiceData,
    deleteItem: typeof deleteItem,
};

class TableContainer extends Component<TProps> {
    handleDelete = async (id) => {
        await this.props.deleteItem(id);
    };

    render() {
        const data = this.props.data;
        const columns = [
            {
                dataIndex: 'date_created',
                key: 'date_created',
                title: 'Create',
            },
            {
                dataIndex: 'number',
                key: 'number',
                title: 'Number',
            },
            {
                dataIndex: 'date_supply',
                key: 'date_supply',
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

        return <AntTable className={styles.table} columns={columns} dataSource={data} pagination={false} rowKey="id" />;
    }
}

export const Table = compose(
    withRouter,
    connect(
        (state) => ({
            data: selectInvoiceData(state),
        }),
        {
            deleteItem,
        }
    )
)(TableContainer);

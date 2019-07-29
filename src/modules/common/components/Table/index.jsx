// @flow
import React, {Component} from 'react';
import {Table as AntTable} from 'antd';
import styles from './styles.local.less';

type TProps = {
    dataColumns: Array<Object>,
    dataList: Array<Object>,
};

export class Table extends Component<TProps> {
    render() {
        const {dataColumns, dataList} = this.props;

        return <AntTable className={styles.table} columns={dataColumns} dataSource={dataList} pagination={false} rowKey="id" />;
    }
}

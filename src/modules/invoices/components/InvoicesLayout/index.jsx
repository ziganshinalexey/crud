// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {getInvoice} from 'modules/invoices/actions/';
import type {TInvoiceData} from 'modules/invoices/reducers/invoices';
import {selectInvoiceData} from 'modules/invoices/selectors/';
import {Table} from 'modules/common/components/Table';
import {Header} from 'modules/common/components/Header';
import {MainHeader} from 'modules/common/components/MainHeader';
import {Wrapper} from 'modules/common/components/Wrapper';
import buttonStyles from 'modules/common/components/Button/styles.local.less';

type TProps = {
    getInvoice: typeof getInvoice,
    invoices: TInvoiceData,
};

class InvoicesContainer extends Component<TProps> {
    componentDidMount() {
        if (!this.props.invoices.length) {
            this.props.getInvoice();
        }
    }

    render() {
        return (
            <>
                <MainHeader text="Invoices" />
                <Wrapper>
                    <Header text="Actions" />
                    <Link className={buttonStyles.container} to="/create/">
                        Add new
                    </Link>
                </Wrapper>
                <Wrapper>
                    <Header text="Invoices" />
                    <Table array={this.props.invoices} />
                </Wrapper>
            </>
        );
    }
}

export const InvoicesLayout = compose(
    connect(
        (state) => {
            return {
                invoices: selectInvoiceData(state),
            };
        },
        {
            getInvoice,
        }
    )
)(InvoicesContainer);

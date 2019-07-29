// @flow
import React from 'react';
import {withRouter} from 'react-router-dom';
import type {RouterHistory} from 'react-router-dom';
import {createInvoice, updateInvoice} from 'modules/invoices/actions';
import type {TInvoiceItem} from 'modules/invoices/reducers/invoices';
import * as Yup from 'yup';
import {Form} from 'modules/common/components/Form';
import styles from 'modules/common/components/Form/styles.local.less';

type TProps = {
    data?: TInvoiceItem,
    history: RouterHistory,
    onSubmit: typeof createInvoice | typeof updateInvoice,
};

const validDate = {
    maxDate: '2111-01-01',
    minDate: '1951-01-01',
};

const invoiceSchema = Yup.object().shape({
    comment: Yup.string(),
    dateCreated: Yup.date()
        .max(new Date(validDate.maxDate), `Date created should be equal or earlier than ${validDate.maxDate}`)
        .min(validDate.minDate, `Date created should be equal or later than ${validDate.minDate}`),
    dateSupply: Yup.date()
        .max(new Date(validDate.maxDate), `Date supply should be equal or earlier than ${validDate.maxDate}`)
        .min(validDate.minDate, `Date supply should be equal or later than ${validDate.minDate}`),
    number: Yup.string(),
});

const fieldList = [
    {
        className: styles.form_input,
        id: 'number',
        label: 'Number',
        name: 'number',
        onBlur: false,
        onFocus: false,
        placeholder: 'Invoice number',
        required: 'required',
        type: 'text',
        wrapperClassName: styles.form_input_wrapper,
    },
    {
        className: styles.form_input,
        id: 'dateCreated',
        label: 'Date created',
        name: 'dateCreated',
        onBlur: true,
        onFocus: true,
        placeholder: 'Select date',
        required: 'required',
        type: 'text',
        wrapperClassName: styles.form_input_wrapper,
    },
    {
        className: styles.form_input,
        id: 'dateSupply',
        label: 'Date supply',
        name: 'dateSupply',
        onBlur: true,
        onFocus: true,
        placeholder: 'Select date',
        required: 'required',
        type: 'text',
        wrapperClassName: styles.form_input_wrapper,
    },
    {
        className: styles.form_textarea,
        id: 'comment',
        label: 'Comment',
        name: 'comment',
        onBlur: false,
        onFocus: false,
        placeholder: '',
        required: '',
        type: 'text',
        wrapperClassName: styles.form_textarea_wrapper,
    },
];

class FormContainer extends React.Component<TProps> {
    handleSubmit = async (values) => {
        if (this.props.onSubmit) {
            await this.props.onSubmit(values);
        }
        this.props.history.push('/');
    };

    render() {
        return <Form data={this.props.data} fieldList={fieldList} handleSubmit={this.handleSubmit} validationSchema={invoiceSchema} />;
    }
}

export const FormLayout = withRouter(FormContainer);

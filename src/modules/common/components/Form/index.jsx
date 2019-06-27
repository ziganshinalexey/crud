// @flow
import {Button} from 'modules/common/components/Button';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {withRouter} from 'react-router-dom';
import type {RouterHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createInvoice as createItem} from 'modules/invoices/actions/';
import {updateInvoice as updateItem} from 'modules/invoices/actions/';
import type {TInvoiceData, TInvoiceItem} from 'modules/invoices/reducers/invoices';
import {selectInvoiceData} from 'modules/invoices/selectors/';
import styles from './styles.local.less';

type TProps = {
    createItem: typeof createItem,
    data?: TInvoiceItem,
    dataList: TInvoiceData,
    fieldList: Array<Object>,
    handleSubmit: (TInvoiceItem) => void,
    history: RouterHistory,
    updateItem: typeof updateItem,
    validationSchema: Yup.object,
};

class ActionForm extends React.Component<TProps> {
    _onFocus = (e) => {
        e.currentTarget.type = 'date';
    };

    _onBlur = (e) => {
        e.currentTarget.type = 'text';
    };

    renderForm = () => {
        const {data, fieldList, validationSchema} = this.props;
        return (
            <Formik enableReinitialize initialValues={data} onSubmit={this.props.handleSubmit} validationSchema={validationSchema}>
                {(props) => {
                    const {values, touched, errors, handleSubmit, handleChange, isSubmitting} = props;

                    return (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            {fieldList.map((field) => (
                                <div className={field.wrapperClassName} key={field.id}>
                                    <label className={styles.form_label} htmlFor={field.id}>
                                        {field.label}
                                    </label>
                                    <input
                                        className={field.className}
                                        id={field.id}
                                        name={field.name}
                                        onBlur={field.onBlur ? this._onBlur : null}
                                        onChange={handleChange}
                                        onFocus={field.onFocus ? this._onFocus : null}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        type={field.type}
                                        value={values[field.name] || ''}
                                    />
                                </div>
                            ))}
                            {errors.dateCreated && touched.dateCreated && <div className={styles.input_feedback}>{errors.dateCreated}</div>}
                            {errors.dateSupply && touched.dateSupply && <div className={styles.input_feedback}>{errors.dateSupply}</div>}
                            <div className={styles.form_button_wrapper}>
                                <Button className={styles.button} disabled={isSubmitting} type="submit">
                                    Save
                                </Button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        );
    };

    render() {
        return <>{this.renderForm()}</>;
    }
}

export const Form = compose(
    withRouter,
    connect(
        (state) => ({
            dataList: selectInvoiceData(state),
        }),
        {
            createItem,
            updateItem,
        }
    )
)(ActionForm);

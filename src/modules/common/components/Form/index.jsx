// @flow
import React, {SyntheticEvent} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button} from 'modules/common/components/Button';
import styles from './styles.local.less';

type TProps = {
    data?: Object,
    fieldList: Array<Object>,
    handleSubmit: Function,
};

export class Form extends React.Component<TProps> {
    onFocus = (event: SyntheticEvent) => {
        event.currentTarget.type = 'date';
    };

    onBlur = (event: SyntheticEvent) => {
        event.currentTarget.type = 'text';
    };

    getValidationSchema = (fieldList: Array<Object>) => {
        return fieldList.reduce(
            (acc, {name, validationSchema}) => ({
                validationSchema: {
                    ...acc.validationSchema,
                    [name]: validationSchema,
                },
            }),
            {validationSchema: {}}
        );
    };

    renderForm = () => {
        const {data, fieldList, handleSubmit: handleSubmitGlobal} = this.props;
        const {validationSchema} = this.getValidationSchema(fieldList);
        return (
            <Formik enableReinitialize initialValues={data} onSubmit={handleSubmitGlobal} validationSchema={Yup.object().shape(validationSchema)}>
                {({values, errors, handleSubmit, handleChange, isSubmitting}) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {fieldList.map(({className, id, label, wrapperClassName, name, onBlur, onFocus, placeholder, required, type}) => (
                            <div className={wrapperClassName} key={id}>
                                <label className={styles.form_label} htmlFor={id}>
                                    {label}
                                </label>
                                <input
                                    className={className}
                                    id={id}
                                    name={name}
                                    onBlur={onBlur ? this.onBlur : null}
                                    onChange={handleChange}
                                    onFocus={onFocus ? this.onFocus : null}
                                    placeholder={placeholder}
                                    required={required}
                                    type={type}
                                    value={values[name] || ''}
                                />
                            </div>
                        ))}

                        {Object.keys(errors).map((errorItem) => (
                            <div className={styles.input_feedback} key={errorItem}>
                                {errors[errorItem]}
                            </div>
                        ))}
                        <div className={styles.form_button_wrapper}>
                            <Button disabled={isSubmitting} type="submit">
                                Save
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        );
    };

    render() {
        return this.renderForm();
    }
}

// @flow
import {Button} from 'modules/common/components/Button';
import React, {SyntheticEvent} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from './styles.local.less';

type TProps = {
    data?: Object,
    fieldList: Array<Object>,
    handleSubmit: (Object) => void,
    validationSchema: Yup.object,
};

export class Form extends React.Component<TProps> {
    onFocus = (event: SyntheticEvent) => {
        event.currentTarget.type = 'date';
    };

    onBlur = (event: SyntheticEvent) => {
        event.currentTarget.type = 'text';
    };

    renderForm = () => {
        const {data, fieldList, handleSubmit: handleSubmitGlobal, validationSchema} = this.props;
        return (
            <Formik enableReinitialize initialValues={data} onSubmit={handleSubmitGlobal} validationSchema={validationSchema}>
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
                            <Button className={styles.button} disabled={isSubmitting} type="submit">
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

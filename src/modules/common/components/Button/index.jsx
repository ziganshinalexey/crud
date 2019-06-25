// @flow
import * as React from 'react';
import styles from './styles.local.less';

type TProps = {
    children?: React.Node,
    disabled: boolean,
    type: string,
};

export const Button = ({children, disabled, type}: TProps) => {
    return (
        <button className={styles.container} disabled={disabled} type={type}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    type: 'submit',
};

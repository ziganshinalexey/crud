// @flow
import * as React from 'react';
import styles from './styles.local.less';

type TProps = {
    actionType: 'edit' | 'delete',
    children?: React.Node,
    disabled: boolean,
    onClick: Function,
    type: string,
};

function getButtonStyle(actionType) {
    switch (actionType) {
        case 'edit':
            return styles.edit_button;
        case 'delete':
            return styles.delete_button;
        default:
            return styles.container;
    }
}

export const Button = ({actionType, children, disabled, onClick, type}: TProps) => {
    const buttonClassName = getButtonStyle(actionType);

    return (
        <button className={buttonClassName} disabled={disabled} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    actionType: null,
    disabled: false,
    onClick: null,
    type: 'submit',
};

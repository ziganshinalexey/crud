// @flow
import * as React from 'react';
import styles from './styles.local.less';

type TProps = {
    children?: React.Node,
};

export const Header = ({children}: TProps) => {
    return <div className={styles.container}>{children}</div>;
};

// @flow
import * as React from 'react';
import styles from './styles.local.less';

type TProps = {
    children?: React.Node,
};

export const MainHeader = ({children}: TProps) => {
    return <div className={styles.main_header}>{children}</div>;
};

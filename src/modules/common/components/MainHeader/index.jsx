// @flow
import * as React from 'react';
import styles from './styles.local.less';

type TProps = {
    children?: React.Node,
    text: string,
};

export const MainHeader = ({text}: TProps) => {
    return <div className={styles.main_header}>{text}</div>;
};

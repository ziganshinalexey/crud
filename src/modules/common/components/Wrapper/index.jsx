// @flow
import * as React from 'react';
import styles from './styles.local.less';

type TProps = {
    children?: React.Node,
};

export const Wrapper = (props: TProps) => {
    return <div className={styles.wrapper}>{props.children}</div>;
};

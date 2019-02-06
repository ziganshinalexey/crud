// @flow
import {AppRouter} from 'app/routes';
import cn from 'classnames';
import React from 'react';
import iconUrl, {ReactComponent as Icon} from './icon.svg';
import styles from './Root.style.local.less';

export const RootContainer = () => (
    <div className={styles.root}>
        <h1>React App</h1>
        <span className={cn(styles.icon, styles.img)} />
        <img alt="test" className={styles.icon} src={iconUrl} />
        <Icon className={styles.icon} color="red" />
        <Icon className={styles.icon} color="green" />
        <Icon className={styles.icon} color="blue" />
        <AppRouter />
    </div>
);

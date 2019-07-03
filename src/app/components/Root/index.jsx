// @flow
import {AppRouter} from 'app/routes';
import React from 'react';
import styles from './styles.local.less';

export const RootContainer = () => (
    <div className={styles.root}>
        <AppRouter />
    </div>
);

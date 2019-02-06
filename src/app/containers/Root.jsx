// @flow
import React from 'react';
import {AppRouter} from 'app/routes';
import iconUrl, {ReactComponent as Icon} from './icon.svg';
import './Root.style.less';

export const RootContainer = () => (
    <div className="Root">
        <h1>React App</h1>
        <span className="Root__icon Root__img" />
        <img alt="test" className="Root__icon" src={iconUrl} />
        <Icon className="Root__icon" color="red" />
        <Icon className="Root__icon" color="green" />
        <Icon className="Root__icon" color="blue" />
        <AppRouter />
    </div>
);

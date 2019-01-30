// @flow
import React from 'react';
import {AppRouter} from 'app/routes';
import {SvgIcon} from 'modules/ui/components/Svg';
import svg from './icon.svg';

export const RootContainer = () => (
    <div>
        <h1>React App</h1>
        <SvgIcon src={svg} />
        <AppRouter />
    </div>
);

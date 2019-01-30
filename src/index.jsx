// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import {SvgIcon} from "modules/ui/components/Svg";
import svg from './icon.svg';

const root = document.getElementById('root');

if (!root) {
    throw Error('Cannot find #root');
}

const App = () => (
    <div>
        <h1>React App</h1>
        <SvgIcon src={svg} />
    </div>
);

ReactDOM.render(
    <App />,
    root
);

// @flow
import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

if (!root) {
    throw Error('Cannot find #root');
}

const App = () => <div>123</div>;

ReactDOM.render(
    <App />,
    root
);

console.log(process.env.NODE_ENV);

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const defaultConfig = require('./default-config');

module.exports = ({htmlOptions, ...options} = {}) => {
    const config = {
        ...defaultConfig,
        ...options,
    };

    const htmlPlugin = new HtmlWebPackPlugin({
        filename: 'index.html',
        hash: true,
        production: config.isProduction,
        template: path.resolve(config.sourcePath, 'index.html'),
        ...htmlOptions,
    });

    return {
        plugins: [htmlPlugin],
    };
};

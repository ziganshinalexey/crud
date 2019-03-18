const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (options = {}) => (config) => {
    const htmlPlugin = new HtmlWebPackPlugin({
        filename: 'index.html',
        hash: true,
        production: config.isProduction,
        template: path.resolve(config.sourcePath, 'index.html'),
        ...options,
    });

    return {
        plugins: [htmlPlugin],
    };
};

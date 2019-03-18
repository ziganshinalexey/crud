const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack/base');
const styleConfig = require('./webpack/style');
const assetsConfig = require('./webpack/assets');
const svgConfig = require('./webpack/svg');
const htmlConfig = require('./webpack/html');

const ignoreLocales = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);

const config = merge([
    baseConfig(),
    styleConfig(),
    assetsConfig(),
    svgConfig(),
    htmlConfig(),
    {
        entry: ['@babel/polyfill', 'whatwg-fetch', './index'],
        optimization: {
            splitChunks: {chunks: 'all'},
        },
        plugins: [ignoreLocales],
    },
]);

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(config);

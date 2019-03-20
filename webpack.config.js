const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpack = require('webpack');
const {createConfig, baseConfig, styleConfig, assetsConfig, svgConfig, htmlConfig} = require('@userstory/webpack-config');

const ignoreLocales = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);

const config = createConfig([
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
])();

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(config);

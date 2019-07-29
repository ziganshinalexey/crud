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
        devServer: {
            before(app) {
                app.get('/api/v1/config', (req, res) => {
                    res.json({
                        debug: 1,
                        host: 'http://rest-api-host.local',
                    });
                });
            },
        },
        entry: ['@babel/polyfill', 'whatwg-fetch', './index'],
        optimization: {
            splitChunks: {chunks: 'all'},
        },
        plugins: [ignoreLocales],
    },
])();

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(config);

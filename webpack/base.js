const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const defaultConfig = require('./default-config');

module.exports = (options = {}) => {
    const config = {
        ...defaultConfig,
        ...options,
    };

    const plugins = [];

    if (config.isProduction) {
        plugins.unshift(new CleanWebpackPlugin([path.resolve(config.publicPath, `${config.buildDir}/*`)]));
    } else {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return {
        context: config.sourcePath,
        devServer: {
            contentBase: config.publicPath,
            historyApiFallback: true,
            hot: true,
            port: process.env.PORT || 8080,
        },
        devtool: config.isProduction ? 'source-map' : 'cheap-module-source-map',
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                },
            ],
        },
        node: {
            child_process: 'empty',
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                }),
            ],
        },
        output: {
            chunkFilename: `${config.buildDir}/js/[name].min.js`,
            filename: `${config.buildDir}/js/[name].min.js`,
            path: config.publicPath,
            publicPath: '/',
        },
        plugins,
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            modules: [config.sourcePath, 'node_modules'],
        },
    };
};

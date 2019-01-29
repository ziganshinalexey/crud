const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const isProduction = 'production' === process.env.NODE_ENV;
const paths = {
    public: path.resolve(__dirname, 'www'),
    src: path.resolve(__dirname, 'src'),
};

const htmlPlugin = new HtmlWebPackPlugin({
    filename: 'index.html',
    hash: true,
    production: isProduction,
    template: path.resolve(paths.src, 'index.html'),
});

const plugins = [htmlPlugin];

if (isProduction) {
    plugins.unshift(new CleanWebpackPlugin([path.resolve(paths.public, 'build/*')]));
}

const config = {
    context: paths.src,
    devServer: {
        contentBase: paths.public,
        historyApiFallback: true,
        port: process.env.PORT || 8080,
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    entry: {
        main: ['@babel/polyfill', 'whatwg-fetch', './index'],
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
            },
        ],
    },
    output: {
        chunkFilename: 'build/js/[name].min.js',
        filename: 'build/js/[name].min.js',
        publicPath: '/',
        path: paths.public,
    },
    plugins,
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [paths.src, 'node_modules'],
    },
};

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(config);

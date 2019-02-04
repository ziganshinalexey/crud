const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProduction = 'production' === process.env.NODE_ENV;
const publicPath = path.resolve(__dirname, 'www');
const sourcePath = path.resolve(__dirname, 'src');

const htmlPlugin = new HtmlWebPackPlugin({
    filename: 'index.html',
    hash: true,
    production: isProduction,
    template: path.resolve(sourcePath, 'index.html'),
    title: 'React App',
});
const cssPlugin = new MiniCssExtractPlugin({
    chunkFilename: 'build/css/[id].min.css',
    filename: 'build/css/[name].min.css',
});

const plugins = [cssPlugin, htmlPlugin];

if (isProduction) {
    plugins.unshift(new CleanWebpackPlugin([path.resolve(publicPath, 'build/*')]));
}

const config = {
    context: sourcePath,
    devServer: {
        contentBase: publicPath,
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
            {
                test: /\.css$/,
                use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'build/fonts/[hash:10].[ext]?[hash:8]',
                    },
                },
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        fallback: 'file-loader',
                        limit: 5000,
                        name: 'build/images/[hash:10].[ext]?[hash:8]',
                    },
                },
            },
            {
                test: /\.svg$/,
                use: ['svg-sprite-loader', 'svgo-loader'],
            },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin(),
        ],
        splitChunks: {chunks: 'all'},
    },
    output: {
        chunkFilename: 'build/js/[name].min.js',
        filename: 'build/js/[name].min.js',
        path: publicPath,
        publicPath: '/',
    },
    plugins,
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [sourcePath, 'node_modules'],
    },
};

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(config);

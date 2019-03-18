const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const defaultConfig = require('./default-config');

module.exports = (options = {}) => {
    const config = {
        ...defaultConfig,
        ...options,
    };

    const styleLoader = config.isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
    const cssLoader = {
        loader: 'css-loader',
        options: {modules: false, sourceMap: true},
    };
    const cssModulesLoader = {
        loader: 'css-loader',
        options: {modules: true, sourceMap: true},
    };
    const postCssLoader = {
        loader: 'postcss-loader',
        options: {sourceMap: true},
    };
    const lessLoader = {
        loader: 'less-loader',
        options: {javascriptEnabled: true, sourceMap: true},
    };

    const cssPlugin = new MiniCssExtractPlugin({
        chunkFilename: `${config.buildDir}/css/[id].min.css`,
        filename: `${config.buildDir}/css/[name].min.css`,
    });

    return {
        module: {
            rules: [
                {
                    exclude: /\.local\.css/,
                    test: /\.css$/,
                    use: [styleLoader, cssLoader, postCssLoader],
                },
                {
                    exclude: /\.local\.less$/,
                    test: /\.less$/,
                    use: [styleLoader, cssLoader, postCssLoader, lessLoader],
                },
                {
                    test: /\.local\.css/,
                    use: [styleLoader, cssModulesLoader, postCssLoader],
                },
                {
                    test: /\.local\.less/,
                    use: [styleLoader, cssModulesLoader, postCssLoader, lessLoader],
                },
            ],
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        autoprefixer: false,
                        discardUnused: false,
                        map: {
                            inline: false,
                        },
                        mergeIdents: false,
                        reduceIdents: false,
                        safe: true,
                        zIndex: false,
                    },
                }),
            ],
        },
        plugins: [cssPlugin],
    };
};

const defaultConfig = require('./default-config');

module.exports = (options = {}) => {
    const config = {
        ...defaultConfig,
        ...options,
    };
    return {
        module: {
            rules: [
                {
                    issuer: {
                        test: /\.(js|jsx)$/,
                    },
                    test: /\.svg$/,
                    use: ['babel-loader', '@svgr/webpack'],
                },
                {
                    test: /\.svg$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader',
                            limit: 5000,
                            name: `${config.buildDir}/images/[hash:10].[ext]?[hash:8]`,
                        },
                    },
                },
            ],
        },
    };
};

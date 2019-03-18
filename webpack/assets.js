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
                    test: /\.(woff(2)?|ttf|eot)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: `${config.buildDir}/fonts/[hash:10].[ext]?[hash:8]`,
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
                            name: `${config.buildDir}/images/[hash:10].[ext]?[hash:8]`,
                        },
                    },
                },
            ],
        },
    };
};

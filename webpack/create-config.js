const path = require('path');
const merge = require('webpack-merge');

module.exports = (presetList = []) => (baseConfig = {}) => {
    const basePath = process.cwd();
    const defaultConfig = {
        basePath,
        buildDir: 'build',
        isDevelopment: 'development' === process.env.NODE_ENV,
        isProduction: 'production' === process.env.NODE_ENV,
        publicPath: path.resolve(basePath, 'www'),
        sourcePath: path.resolve(basePath, 'src'),
    };
    const config = {
        ...defaultConfig,
        ...baseConfig,
    };

    return merge(
        presetList.map((preset) => {
            if ('function' === typeof preset) {
                return preset(config);
            }
            return preset;
        })
    );
};

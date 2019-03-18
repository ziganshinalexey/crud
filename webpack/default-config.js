const path = require('path');

const basePath = process.cwd();

module.exports = {
    basePath,
    buildDir: 'build',
    isDevelopment: 'development' === process.env.NODE_ENV,
    isProduction: 'production' === process.env.NODE_ENV,
    publicPath: path.resolve(basePath, 'www'),
    sourcePath: path.resolve(basePath, 'src'),
};

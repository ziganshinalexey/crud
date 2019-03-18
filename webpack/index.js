const createConfig = require('./create-config');
const baseConfig = require('./base');
const styleConfig = require('./style');
const assetsConfig = require('./assets');
const svgConfig = require('./svg');
const htmlConfig = require('./html');

module.exports = {
    assetsConfig,
    baseConfig,
    createConfig,
    htmlConfig,
    styleConfig,
    svgConfig,
};

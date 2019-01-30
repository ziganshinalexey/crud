module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};

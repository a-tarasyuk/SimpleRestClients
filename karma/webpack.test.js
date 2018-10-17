const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '..');
const TS_CONFIG_PATH = path.join(ROOT_PATH, 'tsconfig', 'test.json');

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                configFile: TS_CONFIG_PATH,
            },
            exclude: /node_modules/
        }]
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin({ tsconfig: TS_CONFIG_PATH }),
    ]
};

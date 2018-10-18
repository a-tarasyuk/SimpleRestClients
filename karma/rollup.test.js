const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const pkg = require('../package');

module.exports = {
    plugins: [
        resolve({ extensions: ['.js', '.ts'] }),
        commonjs({
            namedExports: {
                'faker': ['internet', 'name', 'random', 'lorem']
            },
            include: 'node_modules/**',
        }),
        babel({ exclude: 'node_modules/**', extensions: ['.ts'] }),
    ],
    output: {
        sourcemap: 'inline',
        format: 'iife',
        name: pkg.name,
    },
};

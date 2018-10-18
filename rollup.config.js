import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: './src/SimpleRestClients.ts',
  external: Object.keys(pkg.dependencies),
  plugins: [
    progress(),
    resolve({ extensions: ['.ts'] }),
    babel({ extensions: ['.ts'], exclude: ['dist/**', 'node_modules/**'] }),
    filesize(),
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ]
};

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const input = 'src/index.js';

export default [
  {
    input,
    name: 'RandomText',
    plugins: [resolve(), commonjs(), babel({ runtimeHelpers: true, exclude: 'node_modules/**' })],
    output: [{ file: pkg.browser, format: 'umd' }],
  },
  {
    input,
    external: [],
    plugins: [babel({ runtimeHelpers: true, exclude: 'node_modules/**' })],
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
  },
];

import typescript from 'typescript';
import typescriptPlugin from 'rollup-plugin-typescript2';
import sourcemapsPlugin from 'rollup-plugin-sourcemaps';
import { nodeResolve as resolvePlugin } from '@rollup/plugin-node-resolve';
import commonjsPlugin from '@rollup/plugin-commonjs';
import jsonPlugin from '@rollup/plugin-json';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    typescriptPlugin({ typescript }),
    sourcemapsPlugin(),
    resolvePlugin(),
    commonjsPlugin(),
    jsonPlugin(),
  ],
};

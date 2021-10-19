import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: ['./test.js'],
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [commonjs(), nodeResolve()]  
};
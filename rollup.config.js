import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';


export default {
  input: 'lib/main.js', 
  output: {
    file: 'module/osm-read.js', 
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      presets: ['@babel/preset-env']
    })
  ]
};
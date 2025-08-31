import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import { external } from '@qqi/rollup-external';
import terser from '@rollup/plugin-terser';

export default {
  input: './eg/index.ts',
  output: {
    format: 'es',
    entryFileNames: 'index.mjs',
    preserveModules: false,
    sourcemap: false,
    exports: 'named',
    dir: '.eg',
  },
  // 配置需要排除的包
  external: external({
    ignore: ['a-node-tools', 'color-pen'],
  }),
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({}),
    cleanup(),
    terser(),
    copy({
      targets: [
        { src: 'README.md', dest: 'dist' },
        { src: 'LICENSE', dest: 'dist' },
      ],
    }),
  ],
};

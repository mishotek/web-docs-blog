import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import {terser} from 'rollup-plugin-terser';
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import typescript from "rollup-plugin-typescript2";


const DEST = 'dist/public';

const copyConfig = {
  targets: [
    { src: 'node_modules/@webcomponents', dest: `${DEST}/node_modules` },
    { src: `src/app/styles.css`, dest: DEST },
    { src: `src/app/index.html`, dest: DEST },
    { src: `src/app/assets`, dest: DEST}
  ],
};

const replaceConfig = {
  preventAssignment: true,
  // Replacing these strings
  "src=\"./app-root.ts\"": "src=\"./app-root.js\"",
  __BREAKPOINT_LARGE__: '1920px',
  __BREAKPOINT_LAPTOP__: '1366px',
  __BREAKPOINT_SMALL_LAPTOP__: '1280px',
  __BREAKPOINT_TABLET__: '768px',
  __BREAKPOINT_MOBILE__: '420px',
};

const config = {
  input: `src/app/app-root.ts`,
  output: {
    dir: `${DEST}/`,
    format: 'es',
  },
  plugins: [
    typescript({tsconfigOverride: {"compilerOptions": {"module": "esnext"}}}),
    replace(replaceConfig),
    copy(copyConfig),
    minifyHTML(),
    resolve(),
    terser(),
    livereload(),
  ],
  preserveEntrySignatures: false,
};

export default config;

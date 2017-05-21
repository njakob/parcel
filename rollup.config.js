/* @flow */

import * as fs from 'fs';
import { hulk } from '@njakob/hulk';
import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupBabel from 'rollup-plugin-babel';
import rollupJSON from 'rollup-plugin-json';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const commitHash = (() => {
  try {
    return fs.readFileSync('.commithash', 'utf-8').trim();
  } catch (err) {
    return 'unknown';
  }
})();

const banner = hulk({
  commitHash,
  name: pkg.name,
  version: pkg.version,
  repository: pkg.homepage,
});

export default {
  entry: 'src/parcel.js',
  sourceMap: true,
  moduleName: pkg.name,
  banner,

  plugins: [
    rollupNodeResolve({
      jsnext: true
    }),
    rollupJSON(),
    rollupBabel({
      babelrc: true,
    }),
  ],

  targets: [
    { dest: 'lib/parcel.js', format: 'cjs' },
    { dest: 'lib/parcel.es.js', format: 'es' },
  ]
};

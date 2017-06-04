/* eslint-disable import/no-extraneous-dependencies */

const presetES2015 = require('babel-preset-es2015');
const presetFlow = require('babel-preset-flow');
const presetStage0 = require('babel-preset-stage-0');
const pluginExternalHelpers = require('babel-plugin-external-helpers');

module.exports = function buildPreset() {
  let modules = false;
  let externalHelpers = false;

  if (process.env.PRESET === 'AVA') {
    modules = 'commonjs';
  }
  if (process.env.PRESET === 'ROLLUP') {
    externalHelpers = true;
  }

  return {
    presets: [
      presetStage0,
      [presetES2015.buildPreset, { modules }],
      presetFlow,
    ],
    plugins: [
      externalHelpers && pluginExternalHelpers,
    ].filter(Boolean),
  };
};

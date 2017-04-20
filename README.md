
# parcel [![NPM version][badge:npm-status]][npm] [![Build Status][badge:build-status]][travis] [![ESLint Config][badge:eslint-config]][github:njakob/eslint-config] [![Conventional Commits][badge:conventional-commits]][conventional-commits]

> NPM package parser.

## Features

* Flowtype definitions

## Installation

With NPM:

```
$ npm install @njakob/parcel
```

With Yarn:

```
$ yarn add @njakob/parcel
```

## Usage

```js
import { parseParcel } from '@njakob/parcel';
import parcel from './package.json';

console.log(parseParcel(parcel));
```

## Licences

`njakob/parcel` is licensed under the [MIT License][licence].

[licence]: LICENSE
[github:njakob/eslint-config]: https://github.com/njakob/parcel
[travis]: https://travis-ci.org/njakob/parcel
[npm]: https://nodei.co/npm/@njakob/parcel
[conventional-commits]: https://conventionalcommits.org
[badge:npm-status]: https://img.shields.io/npm/v/@njakob/parcel.svg
[badge:build-status]: https://travis-ci.org/njakob/parcel.svg?branch=master
[badge:eslint-config]: https://img.shields.io/badge/eslint_config-njakob-463fd4.svg
[badge:conventional-commits]: https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg

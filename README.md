
# parcel [![NPM version](https://img.shields.io/npm/v/@njakob/parcel.svg)](https://nodei.co/npm/@njakob/parcel) [![Build Status](https://travis-ci.org/njakob/parcel.svg?branch=master)](https://travis-ci.org/njakob/parcel) [![Dependency Status](https://david-dm.org/njakob/parcel.svg)](https://david-dm.org/njakob/parcel) [![ESLint Config](https://img.shields.io/badge/eslint_config-njakob-463fd4.svg)](https://github.com/njakob/eslint-config) [![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> NPM package parser.

## Features

* Flowtype definitions
* No dependency
* Simple API

## Installation

```
$ npm install @njakob/parcel
```
```
$ yarn add @njakob/parcel
```

## Usage

```js
import fs from 'fs';
import * as parcel from '@njakob/parcel';

const pkg = fs.readFileSync('package.json');

console.log(parcel.parseParcel(pkg));
```

## Changelog

See [changelog](CHANGELOG.md).

## Licences

`njakob/parcel` is licensed under the [MIT License](LICENSE).

/* @flow */

import type { Name } from './common';

export default function parseName(value: any): Name {
  const [, scope, name] = /^(@.+\/)?(.+)$/.exec(value);

  return {
    scope,
    name,
  };
}

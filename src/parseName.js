/* @flow */

import type { Name } from './common';

export default function parseName(value: any): ?Name {
  if (!value) {
    return null;
  }

  const matches = /^(?:(@.+)\/)?(.+)$/.exec(value);
  if (matches) {
    const [, scope, name] = matches;
    return {
      scope,
      name,
    };
  }

  return null;
}

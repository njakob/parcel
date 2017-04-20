/* @flow */

import type { Name } from './types';

export default function parseName(value: any): ?Name {
  if (!value) {
    return null;
  }

  const matches = /^(?:(@.+)\/)?(.+)$/.exec(value);
  if (matches) {
    // $FlowFixMe
    const [, scope = null, name = null] = matches;
    return {
      scope,
      name,
    };
  }

  return null;
}

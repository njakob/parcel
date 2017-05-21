/* @flow */

import type { Name } from './types';

const regexp = /^(?:(@.+)\/)?(.+)$/;

export default function parseName(value: any): ?Name {
  if (!value) {
    return null;
  }

  const matches = regexp.exec(value);

  if (!matches) {
    return null;
  }

  const [fullName, scope = null, name] = matches;

  return { fullName, scope, name };
}

/* @flow */

import type { Member } from './common';

export default function parseMember(value: any): ?Member {
  if (typeof value === 'object') {
    return value;
  }

  if (!value) {
    return null;
  }

  const matches = /^(.*?)(?:\s<(.*)>)?(?:\s\((.*)\))?$/.exec(value);
  if (matches) {
    const [, name, email, url] = matches;
    return {
      name,
      email,
      url,
    };
  }

  return null;
}

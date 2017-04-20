/* @flow */

import type { Member } from './types';

export default function parseMember(value: any): ?Member {
  if (typeof value === 'object') {
    return value;
  }

  if (!value) {
    return null;
  }

  const matches = /^(.*?)(?:\s<(.*)>)?(?:\s\((.*)\))?$/.exec(value);
  if (matches) {
    // $FlowFixMe
    const [, name = null, email = null, url = null] = matches;
    return {
      name,
      email,
      url,
    };
  }

  return null;
}

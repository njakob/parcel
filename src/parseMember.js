/* @flow */

import type { Member } from './common';

export default function parseMember(value: any): Member {
  if (typeof value === 'object') {
    return value;
  }

  const [, name, email, url] = /^(.+)\s+<(.+)>\s+\(.+\)$/.exec(value);

  return {
    name,
    email,
    url,
  };
}

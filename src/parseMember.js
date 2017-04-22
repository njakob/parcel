/* @flow */

import type { Member } from './types';

const regexp = /^(.*?)(?:\s<(.*)>)?(?:\s\((.*)\))?$/;

export default function parseMember(value: any): ?Member {
  if (typeof value === 'object') {
    return value;
  }

  if (!value) {
    return null;
  }

  const matches = regexp.exec(value);

  if (!matches) {
    return null;
  }

  // $FlowFixMe: parsing error due to default values
  const [, name = null, email = null, url = null] = matches;

  return {
    name,
    email,
    url,
  };
}

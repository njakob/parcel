/* @flow */

import type { Repository } from './common';

export default function parseRepository(value: any): Repository {
  if (typeof value === 'object') {
    return value;
  }

  const [, type, name] = /^(.+):+(.+)$/.exec(value);

  let url;
  switch (type) {
    case 'gist':
      url = `https://gist.github.com/${name}`;
      break;
    case 'bitbucket':
      url = `https://bitbucket.org/${name}`;
      break;
    case 'gitlab':
      url = `https://gitlab.com/${name}`;
      break;
    case 'npm':
    default:
      url = `https://www.npmjs.com/package/${name}`;
      break;
  }

  return {
    type,
    url,
  };
}

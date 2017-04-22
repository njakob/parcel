/* @flow */

import type { Repository } from './types';

const regexp = /^(?:(.+):)?(.+)$/;

export default function parseRepository(value: Object | string): ?Repository {
  if (!value) {
    return null;
  }

  if (typeof value === 'object') {
    return value;
  }

  const matches = regexp.exec(value);

  if (!matches) {
    return null;
  }

  // $FlowFixMe: parsing error
  const [, service = '', name] = matches;

  switch (service) {
    case 'gist':
      return { type: 'git', url: `https://gist.github.com/${name}.git` };
    case 'bitbucket':
      return { type: 'git', url: `https://bitbucket.com/${name}.git` };
    case 'gitlab':
      return { type: 'git', url: `https://gitlab.com/${name}.git` };
    case '':
      return { type: 'git', url: `https://github.com/${name}.git` };
    default:
      return null;
  }
}

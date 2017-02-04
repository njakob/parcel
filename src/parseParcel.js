/* @flow */

import type {
  Parcel,
  Name,
  Member,
  Repository,
} from './common';

function parseName(value: any): Name {
  const [, scope, name] = /^(@.+\/)?(.+)$/.exec(value);

  return {
    scope,
    name,
  };
}

function parseMember(value: any): Member {
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

function parseRepository(value: any): Repository {
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

export default function parseParcel({
  homepage,
  description,
  name,
  author,
  license,
  repository,
  bugs,
  contributors = [],
  keywords = [],
  ...obj,
}: any): Parcel {
  return {
    homepage,
    description,
    keywords,
    license,
    bugs,
    private: !!obj.private,
    name: parseName(name),
    author: parseMember(author),
    contributors: (contributors).map(contributor => parseMember(contributor)),
    repository: parseRepository(repository),
  };
}

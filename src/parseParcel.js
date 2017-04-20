/* @flow */

import type { Parcel } from './types';
import parseName from './parseName';
import parseMember from './parseMember';
import parseRepository from './parseRepository';

export default function parseParcel({
  homepage,
  description,
  version,
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
    version,
    private: !!obj.private,
    name: parseName(name),
    author: parseMember(author),
    contributors: (contributors).map(contributor => parseMember(contributor)),
    repository: parseRepository(repository),
  };
}

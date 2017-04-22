/* @flow */

import type { Parcel } from './types';
import parseName from './parseName';
import parseMember from './parseMember';
import parseRepository from './parseRepository';
import parseDependencies from './parseDependencies';

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
  dependencies = {},
  devDependencies = {},
  peerDependencies = {},
  bundledDependencies = {},
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
    dependencies: parseDependencies(dependencies),
    devDependencies: parseDependencies(devDependencies),
    peerDependencies: parseDependencies(peerDependencies),
    bundledDependencies: parseDependencies(bundledDependencies),
  };
}

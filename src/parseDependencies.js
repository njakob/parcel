/* @flow */

import type { Dependency } from './types';
import parseName from './parseName';

export default function parseDependencies(value: Object): Array<Dependency> {
  return Object.keys(value).map((key) => {
    return { name: parseName(key), version: value[key] };
  });
}

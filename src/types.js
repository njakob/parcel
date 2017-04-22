/* @flow */

export type Name = {
  scope: ?string;
  name: string;
};

export type Member = {
  name: ?string;
  email: ?string;
  url: ?string;
};

export type Bugs = {
  url: string;
  email: string;
};

export type Repository = {
  type: string;
  url: string;
};

export type Dependency = {
  name: ?Name;
  version: string;
};

export type Parcel = {
  name: ?Name;
  author: ?Member;
  contributors: Array<?Member>;
  description: ?string;
  private: boolean;
  homepage: ?string;
  version: ?string;
  keywords: Array<string>;
  license: ?string;
  bugs: ?Bugs;
  repository: ?Repository;
  dependencies: Array<Dependency>,
  devDependencies: Array<Dependency>,
  peerDependencies: Array<Dependency>,
  bundledDependencies: Array<Dependency>,
};

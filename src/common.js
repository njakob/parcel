/* @flow */

export type Name = {
  scope: string;
  name: string;
};

export type Member = {
  name: string;
  email: string;
  url: string;
};

export type Bugs = {
  url: string;
  email: string;
};

export type Repository = {
  type: string;
  url: string;
};

export type Parcel = {
  name: Name;
  author: ?Member;
  contributors: Member[];
  description: ?string;
  private: boolean;
  homepage: ?string;
  keywords: string[];
  license: ?string;
  bugs: ?Bugs;
  repository: ?Repository;
};

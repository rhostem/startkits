// @flow
declare type IOwner = {
  login: string,
  id: number,
  avatar_url: string,
}

declare type IRepoDetail = {
  id: number,
  name: string,
  private: boolean,
  owner: IOwner,
  html_url: string,
  description: string,
  git_url: string,
  homepage: string,
  stargazers_count: number,
  default_branch: string,
}

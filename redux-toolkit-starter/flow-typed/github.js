declare type ILabel = {
  id: number,
  name: string,
  color: string,
}

declare type IUser = {
  login: string,
  avatar_url: string,
}

declare type IIssue = {
  id: number,
  title: string,
  number: number,
  user: User,
  body: string,
  labels: Label[],
  comments_url: string,
  state: 'open' | 'closed',
  comments: number,
}

declare type IRepoDetails = {
  id: number,
  name: string,
  full_name: string,
  open_issues_count: number,
}

declare type IComment = {
  id: number,
  body: string,
  user: User,
  created_at: string,
  updated_at: string,
}

declare type IIssuesResult = {
  pageLinks: Links | null,
  pageCount: number,
  issues: Issue[],
}

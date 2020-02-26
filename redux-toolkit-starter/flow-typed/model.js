declare type Label = {
  id: number,
  name: string,
  color: string,
}

declare type User = {
  login: string,
  avatar_url: string,
}

declare type Issue = {
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

// declare type RepoDetails = {
//   id: number,
//   name: string,
//   full_name: string,
//   open_issues_count: number,
// }

declare type Comment = {
  id: number,
  body: string,
  user: User,
  created_at: string,
  updated_at: string,
}

declare type IssuesResult = {
  pageLinks: Links | null,
  pageCount: number,
  issues: Issue[],
}

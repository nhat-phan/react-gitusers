export interface Action<T> {
  type: string
  payload: T
}

export type GetGithubUserRequestAction = Action<{
  users: string[]
}>

export type GetGithubUserResponseAction = Action<GithubUserData>

export type GithubUserData = {
  avatar_url: string
  location: string
  login: string
  name: string
}

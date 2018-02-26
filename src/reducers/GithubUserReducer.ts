import { GithubUserData, GetGithubUserResponseAction } from './../types-definitions'
import { GET_USER_SUCCESS } from '../constants'
import { Map } from 'immutable'

type State = {
  users: Map<string, GithubUserData>
}

const initialState: State = {
  users: Map<string, GithubUserData>()
}

export function GithubUserReducer(state: State = initialState, action: GetGithubUserResponseAction) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        users: state.users.set(action.payload.login, action.payload)
      }
    default:
      return state
  }
}

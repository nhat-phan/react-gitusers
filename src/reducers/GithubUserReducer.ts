import { GET_USER_SUCCESS } from '../constants'
import { Map } from 'immutable'

const initialState: any = {
  users: Map
}

export function GithubUserReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        user: state.users.set(action.payload.login, action.payload)
      }
    default:
      return state
  }
}

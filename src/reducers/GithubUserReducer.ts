import { GET_USER_SUCCESS } from '../constants'
import { Map } from 'immutable'

const initialState = {
  users: Map
}

export function GithubUserReducer(state: any, action: any) {
  switch (action.type) {
    case GET_USER_SUCCESS:
  }
}

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { GithubUserReducer } from './reducers/GithubUserReducer'

export default combineReducers({
  routing: routerReducer,
  Users: GithubUserReducer
})

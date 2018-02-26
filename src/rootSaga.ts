import { all } from 'redux-saga/effects'
import GithubUserSaga from './sagas/GithubUserSaga'

export default function* rootSaga() {
  yield all([...GithubUserSaga])
}

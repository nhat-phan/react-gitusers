import { GithubUserData } from './../types-definitions'
import { GetGithubUserRequestAction } from '../types-definitions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { GET_USER_REQUESTED, GET_USER_SUCCESS } from '../constants'

async function getUserByUsername(username: string): Promise<GithubUserData | false> {
  try {
    // I've blocked by Github because sending to many requests, so I have to use local for testing
    // I leave the local string here, so you guys can use it just in case
    // const api: string = `http://localhost:3000/example.json?user=${username}`
    const api: string = `https://api.github.com/users/${username}`

    const response: any = await fetch(api)
    return <GithubUserData>response.json()
  } catch (error) {
    return false
  }
}

function* getUsers(action: GetGithubUserRequestAction): SagaIterator {
  for (const username of action.payload.users) {
    const result: GithubUserData | false = yield call(getUserByUsername, username)
    if (!result) {
      continue
    }

    yield put({
      type: GET_USER_SUCCESS,
      payload: result
    })
  }
}

export default [takeLatest(GET_USER_REQUESTED, getUsers)]

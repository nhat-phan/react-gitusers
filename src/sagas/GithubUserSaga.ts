import { call, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { GET_USER_REQUESTED, GET_USER_SUCCESS } from '../constants'

async function getUserByUsername(username: string) {
  // I've blocked by Github because sending to many requests, so I have to use local for testing
  // In 90 minutes, I couldn't implement some advanced code like error handling or routing :(
  // I leave the local string here, so you guys can use it just in case
  // const api: string = 'http://localhost:3000/example.json'
  const api: string = `https://api.github.com/users/${username}`
  const response: any = await fetch(api)
  return response.json()
}

function* getUsers(action: any): SagaIterator {
  for (const username of action.payload.users) {
    const result: any = yield call(getUserByUsername, username)
    yield put({
      type: GET_USER_SUCCESS,
      payload: result
    })
  }
}

export default [takeLatest(GET_USER_REQUESTED, getUsers)]

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
// const routerMiddleware = require('react-router-redux').routerMiddleware
// const syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore
// const browserHistory = require('react-router').browserHistory

// const routerMiddlewareInstance = routerMiddleware(browserHistory)

// let routerHistory: any

export default function configureStore(initialState: any = {}) {
  let middleware: any
  // should add production check remove in production version
  if (global['__REDUX_DEVTOOLS_EXTENSION__']) {
    middleware = compose(applyMiddleware(sagaMiddleware), global['__REDUX_DEVTOOLS_EXTENSION__']())
  } else {
    middleware = applyMiddleware(sagaMiddleware)
  }

  const store = createStore(rootReducer, initialState, middleware)
  // routerHistory = syncHistoryWithStore(browserHistory, store)

  sagaMiddleware.run(rootSaga)
  return store
}

export function getRouterHistory(): any {
  // return routerHistory
}

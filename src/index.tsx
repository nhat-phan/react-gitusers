import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement)
registerServiceWorker()

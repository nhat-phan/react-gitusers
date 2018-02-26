import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './css/bootstrap.min.css'
import './css/helpers.css'
import './css/flexbox.css'
import './css/custom.css'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()

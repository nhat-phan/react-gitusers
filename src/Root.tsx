import * as React from 'react'
import { Provider } from 'react-redux'
import App from './App'

export type Props = {
  store: any
}

export default class Root extends React.Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    )
  }
}

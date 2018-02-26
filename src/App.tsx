import * as React from 'react'
import { connect } from 'react-redux'
import { GET_USER_REQUESTED } from './constants'
import { GithubUserData } from './types-definitions'
import { Navbar } from './components/Navbar'
import { User } from './components/User'
import { UserList } from './components/UserList'
import { Map } from 'immutable'

import './App.css'

type Props = {
  users: Map<string, GithubUserData>
}

type DefaultProps = {
  displayUsers: string[]
}

type PropsWithDispatch = DefaultProps &
  Props & {
    dispatch: (action: any) => void
  }

type State = { display?: GithubUserData }

class App extends React.Component<Props & Partial<DefaultProps>, State> {
  static defaultProps: DefaultProps = {
    displayUsers: ['nhat-phan']
  }

  constructor(props: any) {
    super(props)
    this.state = { display: undefined }
  }

  componentWillMount() {
    const props: PropsWithDispatch = this.props as PropsWithDispatch
    props.dispatch({
      type: GET_USER_REQUESTED,
      payload: {
        users: props.displayUsers
      }
    })
  }

  handleBackClick() {
    this.setState({
      display: undefined
    })
  }

  handleUserClick(user: any) {
    this.setState({
      display: user
    })
  }

  render() {
    return (
      <div>
        <Navbar onBackClick={() => this.handleBackClick()} page={this.state.display ? 'person' : 'home'} />
        <div className="container">
          {!this.state.display && (
            <UserList
              onClick={(user: GithubUserData) => this.handleUserClick(user)}
              users={this.props.users.toArray()}
            />
          )}
          <User user={this.state.display} />
        </div>
      </div>
    )
  }
}

export default connect<{}, {}, Partial<DefaultProps>>(state => state['Users'])(App)

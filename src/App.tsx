import * as React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { GET_USER_REQUESTED } from './constants'

class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { display: undefined }
  }

  componentWillMount() {
    this.props['dispatch']({
      type: GET_USER_REQUESTED,
      payload: {
        users: ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']
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
    const users: any = this.props['users'].toArray()
    const userButtons = users.map((item: any, index: number) => {
      return (
        <button
          key={index}
          className="btn btn-primary margin-right-5 margin-bottom-10"
          onClick={() => this.handleUserClick(item)}
        >
          {item.login}
        </button>
      )
    })
    const isDisplayUser = this.state['display']

    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#333' }}>
          <ul className="nav navbar-nav text-center">
            {isDisplayUser && (
              <li className="nav-item">
                <a onClick={() => this.handleBackClick()} style={{ color: '#fff', float: 'left', marginLeft: 20 }}>
                  <i className="fa fa-chevron-left" style={{ marginRight: 10 }} />
                  Back
                </a>
              </li>
            )}
            <li className="nav-item">{!isDisplayUser && <a style={{ color: '#fff' }}>Home</a>}</li>
          </ul>
        </div>
        <div className="container">
          {!isDisplayUser && (
            <div>
              <h3>Top 5 GitHub Users</h3>
              <div className="margin-bottom-20">Tap the username to see more information</div>
              <div className="list">{userButtons}</div>
            </div>
          )}
          {isDisplayUser && (
            <ul className="nav-users remove-margin-b">
              <li>
                <a href="javascript: void(0)">
                  <img className="img-avatar" src={this.state['display']['avatar_url']} alt="" />
                  <span>{this.state['display']['name']}</span>
                  <div className="text-muted">{this.state['display']['location']}</div>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default connect(state => state['Users'])(App)

import * as React from 'react'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#333' }}>
          <ul className="nav navbar-nav text-center">
            <li className="nav-item">
              <a style={{ color: '#fff', float: 'left', marginLeft: 20 }}>
                <i className="fa fa-chevron-left" style={{ marginRight: 10 }} />
                Back
              </a>
              <a style={{ color: '#fff' }}>Home</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <h3>Top 5 GitHub Users</h3>
          <div className="margin-bottom-20">Tap the username to see more information</div>

          <div className="list">
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
            <button className="btn btn-primary margin-right-5 margin-bottom-10">User</button>
          </div>
          <ul className="nav-users remove-margin-b">
            <li>
              <a href="javascript: void(0)">
                <img className="img-avatar" src="https://avatars1.githubusercontent.com/u/2829600?v=4" alt="" />
                <span>Amy Hunter</span>
                <div className="text-muted">Copywriter</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App

import * as React from 'react'
import { GithubUserData } from '../types-definitions'

type Props = {
  onClick: (user: GithubUserData) => void
  users: GithubUserData[]
}

export class UserList extends React.Component<Props> {
  renderUsers() {
    return this.props.users.map((item: any, index: number) => (
      <button
        key={index}
        className="btn btn-primary margin-right-5 margin-bottom-10"
        onClick={() => this.props.onClick(item)}
      >
        {item.login}
      </button>
    ))
  }

  render() {
    return (
      <div>
        <h3>Top 5 GitHub Users</h3>
        <div className="margin-bottom-20">Tap the username to see more information</div>
        <div className="list">{this.renderUsers()}</div>
      </div>
    )
  }
}

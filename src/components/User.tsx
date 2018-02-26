import * as React from 'react'
import { GithubUserData } from '../types-definitions'

type Props = {
  user?: GithubUserData
}

export class User extends React.Component<Props> {
  render() {
    if (!this.props.user) {
      // tslint:disable-next-line
      return null
    }

    return (
      <ul className="nav-users remove-margin-b">
        <li>
          <a href="javascript: void(0)">
            <img className="img-avatar" src={this.props.user.avatar_url} alt="" />
            <span>{this.props.user.name}</span>
            <div className="text-muted">{this.props.user.location}</div>
          </a>
        </li>
      </ul>
    )
  }
}

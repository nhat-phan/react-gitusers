import * as React from 'react'

type Props = {
  onBackClick: () => void
  page: 'home' | 'person'
}

export class Navbar extends React.Component<Props> {
  renderPersonNavbar() {
    return (
      <ul className="nav navbar-nav text-center">
        <li className="nav-item">
          <a onClick={this.props.onBackClick}>
            <i className="fa fa-chevron-left" style={{ marginRight: 10 }} />
            Back
          </a>
        </li>
        <li className="nav-item">
          <a>Person</a>
        </li>
        <li className="nav-item">
          <a />
        </li>
      </ul>
    )
  }

  renderHomeNavbar() {
    return (
      <ul className="nav navbar-nav text-center">
        <li className="nav-item">
          <a />
        </li>
        <li className="nav-item">
          <a>Home</a>
        </li>
        <li className="nav-item">
          <a />
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div id="main-nav" className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#333' }}>
        {this.props.page === 'person' ? this.renderPersonNavbar() : this.renderHomeNavbar()}
      </div>
    )
  }
}

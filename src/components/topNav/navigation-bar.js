import React from 'react';

import './navigation-bar.css';
import DropDownTopNav from '../dropDownTopNav/dropDownTopNav';

function contentClass(isShow) {
  if (isShow) {
    return "smallScreenDisplay";
  }
  return "smallScreenHidden";
}

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return {isShow: !prevState.isShow};
    });
  }

  render() {
    return (
      <nav>
        <ul>
          <li className="smallScreenHidden">
            <a
              href="#about"
              aria-label="about"
            >
              About
            </a>
          </li>
          <li className="smallScreenHidden">
            <a
              href="#register"
              aria-label="register"
            >
            Register
            </a>
          </li>
          <li className="smallScreenHidden">
            <a
              href="#login-button"
              aria-label="log in or demo"
            >
            Log In/Demo
            </a>
          </li>
          <li className="smallScreenDisplay">
            <a
              href="#more"
              aria-label="more"
              onClick={this.handleClick}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className={contentClass(this.state.isShow)}>
          <DropDownTopNav />
        </div>
      </nav>
    )
  }
}

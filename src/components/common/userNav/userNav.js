import React from 'react';
import { Link } from 'react-router-dom';

import '../topNav/navigation-bar.css';
import DropDownUserNav from '../dropDownUserNav/dropDownUserNav';

function contentClass(isShow) {
  if (isShow) {
    return "smallScreenDisplay";
  }
  return "smallScreenHidden";
}

export default class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return {isShow: !state.isShow};
    });
  }

  render() {
    return (
      <nav>
        <ul>
          <li className="smallScreenHidden">
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="smallScreenHidden">
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li className="smallScreenHidden">
            <Link to="/add-job">
            Add Job
            </Link>
          </li>
          <li className="smallScreenHidden">
            <Link to="/job-collection">
            Job Collection
            </Link>
          </li>
          <li className="smallScreenHidden">
            <Link to="/">
            Log out
            </Link>
          </li>
          <li className="smallScreenDisplay">
            <a
              href="#more"
              aria-label="more"
              onClick={this.handleClick}>
            <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className={contentClass(this.state.isShow)}>
          <DropDownUserNav />
        </div>
      </nav>
    );
  }
}

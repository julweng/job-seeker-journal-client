import React from 'react';
import { Link } from 'react-router-dom';

import '../dropDownTopNav/dropDownTopNav.css';

export default function DropDownUserNav(props) {
  return (
    <div className="drop-down-top-nav largeScreenHidden">
      <ul>
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/add-job">
          Add Job
          </Link>
        </li>
        <li>
          <Link to="/job-collection">
          Job Collection
          </Link>
        </li>
        <li>
          <Link to="/">
          Log out
          </Link>
        </li>
      </ul>
    </div>
  );
}

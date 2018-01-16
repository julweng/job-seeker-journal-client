import React from 'react';
import { Link } from 'react-router-dom';

import '../topNav/navigation-bar.css';

import DropDownUserNav from '../dropDownUserNav/dropDownUserNav';

export default function UserNav(props) {
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
              Log Out
            </Link>
          </li>
          <li className="smallScreenDisplay">
            <a
              href="/more"
              aria-label="more"
              onClick={() => props.onMore()}
            >
            <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <DropDownUserNav />
      </nav>
    );

}

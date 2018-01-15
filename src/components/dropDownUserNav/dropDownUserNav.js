import React from 'react';

import '../dropDownTopNav/dropDownTopNav.css';

export default function DropDownUserNav(props) {
  return (
    <div className="drop-down-top-nav toggle-smallScreenDisplay">
      <ul>
        <li>
          <a
            href="#dashboard"
            aria-label="dashboard"
            onClick={() => props.onDashboard()}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#profile"
            aria-label="profile"
            onClick={() => props.onProfile()}
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#add-edit-job"
            aria-label="add or edit job"
            onClick={() => props.onAddJob()}
            >
            Add/Edit Job
          </a>
        </li>
        <li>
          <a
            href="#job-collection"
            aria-label="job collection"
            onClick={() => props.onJobCollection()}
          >
          Job Collection
          </a>
        </li>
        <li>
          <a
            href="#log-out"
            aria-label="log out"
            onClick={() => props.onLogOut()}
          >
          Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}

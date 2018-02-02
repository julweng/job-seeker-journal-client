import React from 'react';

import './jobItem.css';

export default function JobItem(props) {
  return (
    <div className="job-item">
      <button id={props.id}>
      <i className="fa fa-caret-right" aria-hidden="true"></i>
      &nbsp;
      {props.company}: {props.title}</button>
    </div>
  );
}

JobItem.defaultProps = {
    id: 1,
    title: 'front-end web developer',
    company: 'Microsoft'
};

import React from 'react';

import './jobItem.css';

export default function JobItem(props) {
  return (
    <div className="job-item">
      <i className="fa fa-caret-right" aria-hidden="true"></i>
      &nbsp;&nbsp;
      <a href={`/${props.id}`}>{props.company}: {props.title}</a>
    </div>
  );
}

JobItem.defaultProps = {
    id: 1,
    title: 'front-end web developer',
    company: 'Microsoft'
};

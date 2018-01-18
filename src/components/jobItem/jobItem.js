import React from 'react';

import './jobItem.css';

export default function JobItem(props) {
  return (
    <li className="col-12 job-item">
      <i className="fa fa-caret-right" aria-hidden="true"></i>
      &nbsp;&nbsp;
      <a href={`#${props.title}`}>{props.title}&nbsp;{props.date}</a>
    </li>

  );
}

JobItem.defaultProps = {
  title: 'front-end web developer'
}

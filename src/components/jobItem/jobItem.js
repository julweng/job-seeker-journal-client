import React from 'react';

import './jobItem.css';

export default function JobItem(props) {
  if(!props) {
    return <p>nothing to see here! add some jobs</p>
  }
  return (
    <div className="job-item">
      <button id={props.id} onClick={props.handleClick}>
      <i className="fa fa-caret-right" aria-hidden="true"></i>
      &nbsp;
      {props.company}:&nbsp;{props.title}&nbsp;&nbsp;&nbsp;{props.dateApplied}</button>
    </div>
  );
}

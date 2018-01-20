import React from 'react';

import './jobItem.css';

export default function JobItem(props) {
  return (
    <div className="col-12 job-item">
      <i className="fa fa-caret-right" aria-hidden="true"></i>
      &nbsp;&nbsp;
      <a href={`/${props.id}`}>{props.title}</a>
      
    </div>
  );
}

JobItem.defaultProps = {
    id: 1,
    title: 'front-end web developer',
    date: '01/08/2018'
};

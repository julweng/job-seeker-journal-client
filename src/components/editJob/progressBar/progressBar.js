import React from 'react';

import './progressBar.css';

export default function ProgressBar(props) {
  const progressBar = ['resume submitted', 'phone interview', 'on-site interview', 'offer received'];

  let progress = progressBar.map((goal, index) => (
    <div className="col-3" key={`${index}`}>
      <p>{goal}</p>
    </div>
  ))

  let achieved = []
  if(props.progress === 'resume submitted') {
    achieved.push('resume submitted')
  } else if(props.progress === 'phone interview') {
    achieved.push('resume submitted', 'phone interview')
  } else if(props.progress === 'on-site interview') {
    achieved.push('resume submitted', 'phone interview', 'on-site interview')
  } else if(props.progress === 'offer received') {
    achieved.push('resume submitted', 'phone interview', 'on-site interview', 'offer received')
  }

  let checks = achieved.map((x, index) => (
    <div className="col-3 progress-check" key={index}>
      <i className="fa fa-check-circle fa-3x" aria-hidden="true"></i>
    </div>
  ))

  return (
    <div className="col-12 progress-container">
      <div className="col-12 progress-title">
        <h4>Current Progress</h4>
      </div>
      <div className="col-12 progress-bar-container">
      {checks}
      </div>
      <div className="col-12 progress-bar-container">{progress}</div>
    </div>
  )
}

ProgressBar.defaultProps = {
  progress: 'on-site interview'
}

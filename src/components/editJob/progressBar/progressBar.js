import React from 'react';

import './progressBar.css';

export default function ProgressBar(props) {
  let progressBar = [];
  if(props.progress) {
    progressBar = props.progress.map((goal, index) =>
      <div className="col-3 progress-triangle" key={`${goal}${index}`}>
        {goal}
      </div>
    )
  }
  return (
    <div className="col-12 progress-container">
      <div className="col-12 progress-title">
        <h4>Current Progress</h4>
      </div>
      <div className="col-12 progress-bar-container">
        {progressBar}
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  progress: ['resume submitted', 'phone interview', 'on-site interview', 'Offer received']
}

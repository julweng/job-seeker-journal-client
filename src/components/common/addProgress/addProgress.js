import React from 'react';

import './addProgress.css';

export default function AddProgress(props) {
  const progressRadio = props.progress.map((goal, index) =>
    <div className="col-3" key={index}>
      <label htmlFor="progress-type" key={`label-${goal}`}>
        <input className="radio" key={`input-${goal}`} type="radio" name="progress" value="0" />
        {goal}
      </label>
    </div>
  )
  return (
    <div className="col-12 radio-container">
      {progressRadio}
    </div>
  )
}

AddProgress.defaultProps = {
  progress: ['resume submitted', 'phone interview', 'on-site interview', 'Offer received']
}

import React from 'react';

import './jobReq.css';
import ProgressBar from '../progressBar/progressBar';

export default function JobReq(props) {
  let jobReqs = [];
  if(props.requirements) {
    jobReqs = props.requirements.map((requirement, index) =>
      <li className="job-req-list-item" key={index}>&#9679;&nbsp;&nbsp;{requirement}</li>
    )
  }
  return (
    <div className="col-12 job-req-container">
    <div className="col-12">
      <h4>Job Requirements</h4>
    </div>
      <div className="col-12">
        <ul className="job-req-list-container">
          {jobReqs}
        </ul>
        <ProgressBar />
      </div>
    </div>
  )
}

JobReq.defaultProps = {
  requirements: ['lorem ipson', 'dolor', 'sit amet']
}

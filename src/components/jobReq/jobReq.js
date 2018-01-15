import React from 'react';

import './jobReq.css';

import JobDetail from '../jobDetail/jobDetail';

export default function JobReq(props) {
  let jobReqs = [];
  if(props.requirements) {
    jobReqs = props.requirements.map((requirement, index) =>
      <li className="job-req-list-item" key={index}>&#9679;&nbsp;&nbsp;{requirement}</li>
    )
  }
  return (
    <div className="col-6">
      <h4>Job Requirements</h4>
        <ul className="job-req-list-container">
          {jobReqs}
        </ul>
        <JobDetail />
    </div>
  )
}

JobReq.defaultProps = {
  requirements: ['lorem ipson', 'dolor', 'sit amet']
}

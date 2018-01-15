import React from 'react';

import './jobDetail.css';

export default function JobDetail(props) {
  return(
    <div className="col-12 job-detail-container">
      <h4>Details</h4>
      <p className="col-6"><strong>Conact: </strong><span>{props.contact}</span></p>
      <p className="col-6"><strong>Email: </strong><span>{props.contactEmail}</span></p>
      <p className="col-6"><strong>Referrer: </strong><span>{props.referrer}</span></p>
      <p className="col-6"><strong>Email: </strong><span>{props.referrerEmail}</span></p>
      <p className="col-6"><strong>Date submitted: </strong><span>{props.dateSubmit}</span></p>
    </div>
  )
}

JobDetail.defaultProps = {
  contact: 'Mary Smith',
  contactEmail: 'msmith@illumina.com',
  referrer: 'none',
  referrerEmail: 'none',
  dateSubmit: '01/31/2018'
}

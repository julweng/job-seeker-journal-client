import React from 'react';

import './viewJob.css';

import JobReq from '../jobReq/jobReq';
import AnalysisChart from '../analysisChart/analysisChart';
import DeleteButton from '../../common/deleteButton/deleteButton';
import CancelButton from '../../common/cancelButton/cancelButton';
import EditButton from '../../common/editButton/editButton';
import EditJobForm from '../editJobForm/editJobForm';

export default function ViewJob(props) {
  return (
    <div className="row view-job-container">
      <div className="col-12 view-job-title-container">
        <h3>{props.title}</h3>
        <h4>{props.company}, {props.location}</h4>
      </div>
      <div className="col-12">
        <div className="col-6">
          <JobReq />
        </div>
      <div className="col-6">
        <AnalysisChart />
      </div>
      </div>
      <div className="col-12 edit-job-button-container">
        <div className="col-4">
          <EditButton />
        </div>
        <div className="col-4">
          <DeleteButton />
        </div>
        <div className="col-4">
          <CancelButton />
        </div>
      </div>
      <div className="col-12">
        <h4>Edit Job</h4>
      </div>
      <EditJobForm />
    </div>
  )
}

ViewJob.defaultProps = {
  title: 'Junior Front-end Web Developer',
  company: 'Illumina',
  location: 'San Diego, CA',
  requirements: ['lorem ipson', 'dolor', 'sit amet', 'id est']
}

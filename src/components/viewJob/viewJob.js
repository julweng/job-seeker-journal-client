import React from 'react';

import './viewJob.css';

import JobReq from '../jobReq/jobReq';
import AnalysisChart from '../analysisChart/analysisChart';
import ProgressBar from '../progressBar/progressBar';
import DeleteButton from '../deleteButton/deleteButton';
import CancelButton from '../cancelButton/cancelButton';
import EditButton from '../editButton/editButton';
import EditJobForm from '../editJobForm/editJobForm';

export default function ViewJob(props) {
  return (
    <div className="row view-job-container">
      <div className="col-12 view-job-title-container">
        <h3>{props.title}</h3>
        <h4>{props.company}, {props.location}</h4>
      </div>
      <JobReq />
      <AnalysisChart />
      <ProgressBar />
      <div className="col-12 edit-job-button-container">
        <EditButton />
        <DeleteButton />
        <CancelButton />
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

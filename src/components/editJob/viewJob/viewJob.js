import React from 'react';
import { Link } from 'react-router-dom';
import './viewJob.css';

import JobReq from '../jobReq/jobReq';
import AnalysisChart from '../analysisChart/analysisChart';
import DeleteButton from '../../common/deleteButton/deleteButton';
import CancelButton from '../../common/cancelButton/cancelButton';
import EditButton from '../../common/editButton/editButton';
import EditJobForm from '../editJobForm/editJobForm';

export default class ViewJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editJob: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return {
        editJob: !state.editJob
      }
    });
  }

  showForm(editJob) {
    if(editJob) {
      return (
        <div className="row">
          <div className="col-12">
            <h4>Edit Job</h4>
          </div>
          <div className="col-12">
            <EditJobForm handleClick={this.handleClick} />
          </div>
        </div>
      );
    }
    return(
      <div></div>
    );
  }

  render() {
    return (
      <div className="row view-job-container">
        <div className="col-12 view-job-title-container">
          <h3>{this.props.title}</h3>
          <h4>{this.props.company}, {this.props.location}</h4>
        </div>
        <div className="col-12">
          <div className="col-6">
            <JobReq />
          </div>
          <div className="col-6">
            <AnalysisChart />
          </div>
        </div>
        <div className="row edit-job-button-container">
          <div className="col-4">
            <EditButton handleClick={this.handleClick} />
          </div>
          <div className="col-4">
            <DeleteButton />
          </div>
          <div className="col-4">
            <Link to="/job-collection">
              <CancelButton />
            </Link>
          </div>
        </div>
        {this.showForm(this.state.editJob)}
      </div>
    );
  }
}

ViewJob.defaultProps = {
  title: 'Junior Front-end Web Developer',
  company: 'Illumina',
  location: 'San Diego, CA',
  requirements: ['lorem ipson', 'dolor', 'sit amet', 'id est']
}

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditJobForm } from '../../../actions/handler';

import './viewJob.css';
import JobReq from '../jobReq/jobReq';
import AnalysisChart from '../analysisChart/analysisChart';
import CrudButton from '../../common/crudButton/crudButton';
import EditJobForm from '../editJobForm/editJobForm';

export class ViewJob extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(e) {
    e.preventDefault();
    e.stopPropagation(); this.props.openEditJobForm(this.props.editJob)
  }

  showForm(editJob) {
    if(editJob) {
      return (
        <div className="row">
          <div className="col-12">
            <h4>Edit Job</h4>
          </div>
          <div className="col-12">
            <EditJobForm />
          </div>
        </div>
      );
    }
    return false;
  }

  render() {
    const { job, editJob } = this.props;
    if(job) {
      return (
        <div className="row view-job-container">
          <div className="col-12 view-job-title-container">
            <h3>{job.title}</h3>
            <h4>{job.company}, {job.location}</h4>
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
              <CrudButton
                type={`button`}
                className={`edit-button`}
                text={`Edit`}
                handleEditClick={this.handleEditClick}
              />
            </div>
            <div className="col-4">
              <CrudButton
                type={`button`}
                className={`delete-button`}
                text={`Delete`}
              />
            </div>
            <div className="col-4">
              <Link to="/job-collection">
                <CrudButton
                  type={`button`}
                  className={`cancel-button`}
                  text={`Cancel`}
                />
              </Link>
            </div>
          </div>
          {this.showForm(editJob)}
        </div>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({
  editJob: state.handlers.editJob,
  job: state.user.job,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openEditJobForm: openEditJobForm
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ViewJob);

ViewJob.defaultProps = {
  title: 'Junior Front-end Web Developer',
  company: 'Illumina',
  location: 'San Diego, CA',
  requirements: ['lorem ipson', 'dolor', 'sit amet', 'id est']
}

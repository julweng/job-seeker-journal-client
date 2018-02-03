import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditJobForm, getInitialJobValues } from '../../../actions/handler';
import ProgressBar from '../progressBar/progressBar';
import './viewJob.css';
import CrudButton from '../../common/crudButton/crudButton';
import { getJobFilterById, deleteJob } from '../../../actions/users';
import EditJobForm from '../editJobForm/editJobForm';
import moment from 'moment';

const user_id = localStorage.getItem('user_id');
const job_id = localStorage.getItem('jobId');

export class ViewJob extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.getJobFilterById(user_id, job_id);
  }

  handleEditClick() {
  this.props.openEditJobForm(this.props.editJob)
  }

  handleDeleteClick() {
    this.props.deleteJob(user_id, job_id);
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
    const { error, job } = this.props;
    if(error) {
      return <p>Oops! Sorry, your data vanished...</p>
    } else if(job) {
      return (
        <div className="row view-job-container">
          <div className="col-12 view-job-title-container">
            <h3>{job.title}</h3>
          </div>
          <div className="col-12">
            <h4>{job.company}, {job.location}</h4>
            <p>applied on: {moment(job.dateApplied).format("YYYY-MM-DD")}</p>
          </div>
            <div className="col-12">
              <ProgressBar progress={job.progress}/>
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
            <Link to="job-collection">
              <CrudButton
                type={`button`}
                className={`delete-button`}
                text={`Delete`}
                handleDeleteClick={this.handleDeleteClick}
              />
            </Link>
            </div>
            <div className="col-4">
              <Link to="/job-collection">
                <CrudButton
                  type={`button`}
                  className={`cancel-button`}
                  text={`Collection`}
                />
              </Link>
            </div>
          </div>
          {this.showForm(this.props.editJob)}
        </div>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({
  editJob: state.handlers.editJob,
  job: state.users.job,
  jobs: state.users.jobs,
  initialValues: state.handlers.jobData,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openEditJobForm: openEditJobForm,
    getJobFilterById: getJobFilterById,
    getInitialJobValues: getInitialJobValues,
    deleteJob: deleteJob,
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ViewJob);

ViewJob.defaultProps = {
  title: 'Junior Front-end Web Developer',
  company: 'Illumina',
  location: 'San Diego, CA'
}

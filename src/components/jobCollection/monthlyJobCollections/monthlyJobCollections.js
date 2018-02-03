import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getJobsFilterByMonth, getJobs } from '../../../actions/users';

import './monthlyJobCollections.css';
import JobItem from '../../jobItem/jobItem';
import { Field, reduxForm, focus } from 'redux-form';

const user_id = localStorage.getItem('user_id');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export class MonthlyJobCollections extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.getJobs(user_id)
  }
  handleClick(e) {
    const job_id = e.target.getAttribute('id');
    localStorage.setItem('jobId', job_id);
  }

  onSubmit(values) {
    const { selectedMonth } = values;
    console.log(selectedMonth)
    this.props.getJobsFilterByMonth(user_id, selectedMonth);
  }

  renderList(jobsByMonth, jobs) {
    if(jobsByMonth.length === 0) {
      return (jobs.map(job =>
        <li className="col-12" key={`${job._id}`}>
          <Link to="/edit-job">
            <JobItem
              id={job._id}
              title={job.title}
              company={job.company}
              handleClick={this.handleClick}
            />
          </Link>
        </li>))
    } else if(jobsByMonth.length > 0) {
      return (jobsByMonth.map(job =>
        <li className="col-12" key={`${job._id}`}>
          <Link to="/edit-job">
            <JobItem
              id={job._id}
              title={job.title}
              company={job.company}
              handleClick={this.handleClick}
            />
          </Link>
        </li>
      ))
    } else {
      return (
        <div className="warning">
          <p>Nothing to see here</p>
          <p>Please add some jobs</p>
        </div>
      )
    }
  }

  render() {
    const { error, handleSubmit, jobsByMonth, jobs } = this.props

    if(error) {
      return <p>
      Sorry...your file is not here,
      It may have been important,
      But now it is gone.</p>
    }
    return (
      <div className="row">
        <div className="col-2">&nbsp;</div>
        <div className="col-8 month-card-container">
          <form className="col-12" id="select-month-form"  onSubmit={handleSubmit(values =>  this.onSubmit(values)
          )}>
            <fieldset>
              <div className="col-12 select-style">
                <label>Filter jobs by </label>
                <Field name="selectedMonth" component="select">
                  <option value="">Selecting a month...</option>
                    {months.map(monthOption => (
                      <option value={monthOption} key={monthOption}>
                        {monthOption}
                      </option>
                    ))}
                </Field>
                <button id="send-button"><i className="fa fa-caret-right"></i></button>
              </div>
            </fieldset>
          </form>
          <div className="col-12 month-collection-container">
            <ul className="col-12 job-item-list">
              {this.renderList(jobsByMonth, jobs)}
            </ul>
          </div>
        </div>
        <div className="col-2">&nbsp;</div>
      </div>
      );
    }
  }


MonthlyJobCollections = reduxForm({
  form: 'MonthylyJobCollections',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('MonthylyJobCollections', Object.keys(errors)[0]))
})(MonthlyJobCollections)

const mapStateToProps = state => {
  return {
    jobs: state.users.jobs,
    jobsByMonth: state.users.jobsByMonth,
    error: state.users.err
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getJobsFilterByMonth: getJobsFilterByMonth,
    getJobs: getJobs
  }, dispatch));

MonthlyJobCollections = connect(mapStateToProps, mapDispatchToProps)(MonthlyJobCollections);

export default MonthlyJobCollections

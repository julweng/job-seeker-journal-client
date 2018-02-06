import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { getJobsFilterByMonth, getJobs, setJobId } from '../../../actions/users';
import { toRedirect } from '../../../actions/handler';
import './monthlyJobCollections.css';
import JobItem from '../../jobItem/jobItem';
import { Field, reduxForm, focus } from 'redux-form';
import FontAwesome from 'react-fontawesome';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export class MonthlyJobCollections extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const job_id = e.target.getAttribute('id');
    this.props.setJobId(job_id);
    this.props.toRedirect(true);
  }

  onSubmit(values) {
    const { selectedMonth } = values;
    this.props.getJobsFilterByMonth(selectedMonth);
  }

  renderList(jobsByMonth) {
    if(jobsByMonth.length === 0) {
      return (
        <li className="col-12 empty-message">
          <p>Have you applied any jobs this month?</p>
          <p>Add some jobs in the
          <Link to="/add-job"> Add Job </Link>
          section</p>
        </li>)
    } else if(jobsByMonth.length > 0) {
      return (jobsByMonth.map(job =>
        <li className="col-12" key={`${job._id}`}>
            <JobItem
              id={job._id}
              title={job.title}
              company={job.company}
              dateApplied={job.dateApplied}
              handleClick={this.handleClick}
            />
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
    const { error, loading, handleSubmit, jobsByMonth, redirect} = this.props
    if(redirect) {
      return <Redirect to="/edit-job" />
    }

    if(error) {
      return <p>
      Sorry...your file is not here,
      It may have been important,
      But now it is gone.</p>
    }

    if (loading) {
      return (
        <FontAwesome
        name='spinner'
        size='3x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      )
    }

    return (
      <div className="row">
        <div className="col-2">&nbsp;</div>
        <div className="col-8 month-card-container">
          <form className="col-12" id="select-month-form"  onSubmit={handleSubmit(values => this.onSubmit(values)
          )}>
            <fieldset>
              <div className="col-12 select-style">
                <label>Find jobs to edit by </label>
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
              {this.renderList(jobsByMonth)}
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
    job: state.users.job,
    jobs: state.users.jobs,
    jobsByMonth: state.users.jobsByMonth,
    error: state.users.err,
    redirect: state.handlers.redirect,
    job_id: state.users.job_id,
    loading: state.users.loading
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getJobsFilterByMonth: getJobsFilterByMonth,
    getJobs: getJobs,
    toRedirect: toRedirect,
    setJobId: setJobId,
  }, dispatch));

MonthlyJobCollections = connect(mapStateToProps, mapDispatchToProps)(MonthlyJobCollections);

export default MonthlyJobCollections

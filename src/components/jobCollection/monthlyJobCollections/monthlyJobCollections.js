import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJobs } from '../../../actions/users';
import './monthlyJobCollections.css';
import JobItem from '../../jobItem/jobItem';
import { Field, reduxForm, focus } from 'redux-form';

const user_id = localStorage.getItem('user_id');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export class MonthlyJobCollections extends React.Component {
  onSubmit(values) {
    const { month } = values;
    console.log('month')
    console.log(user_id)
    this.props.getJobs(user_id)
    console.log(this.props.jobs)
  }

  render() {
    const { error, handleSubmit, jobs } = this.props
    console.log(jobs)
    console.log(user_id)

    const warning = <p>~*<a href="/add-job">Add jobs</a> to your collection *~</p>;

    const jobList = jobs.map(job =>
      <li className="col-12" key={`${job.title}-${job.id}`}>
        <JobItem
          id={job.id}
          title={job.title}
          company={job.company}
        />
      </li>
    )

    if(error) {
      return <p>Oops! There was an error loading the items.</p>
    } else {
      return (
        <div className="row">
        <div className="col-2">&nbsp;</div>
        <div className="col-8 month-card-container">
        <form className="col-12" id="select-month-form" onSubmit={handleSubmit(values => this.onSubmit(values)
        )}>
        <fieldset>
        <div className="col-12 select-style">
          <label>Select a month to view jobs   </label>
          <Field name="selectedMonth" component="select">
            <option value="">Select a month...</option>
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
              {jobList}
            </ul>
          </div>
        </div>
        <div className="col-2">&nbsp;</div>
        </div>
      );
    }
  }
}

MonthlyJobCollections = reduxForm({
  form: 'monthylyJobCollections',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('monthylyJobCollections', Object.keys(errors)[0]))
})(MonthlyJobCollections)

const mapStateToProps = state => {
  return {
    skills: state.users.skills,
    jobs: state.users.jobs,
    error: state.users.err
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getJobs: getJobs
  }, dispatch));

MonthlyJobCollections = connect(mapStateToProps, mapDispatchToProps)(MonthlyJobCollections);

export default MonthlyJobCollections

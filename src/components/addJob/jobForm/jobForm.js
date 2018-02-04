import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../../common/input/input'
import DateInput from '../../common/dateInput/dateInput';
import { postJob } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import { required } from '../../../validators';
import { toRedirect } from '../../../actions/handler';
import CrudButton from  '../../common/crudButton/crudButton';
import './jobForm.css';

const user_id = localStorage.getItem('user_id');

const progress = ['resume submitted', 'phone interview', 'on-site interview', 'offer received']

export class JobForm extends React.Component {

  onSubmit(values) {
    const { title, company, location, dateApplied, progress } = values;
    this.props.toRedirect(this.props.redirect);
    return this.props.dispatch(postJob(user_id, title, company, location, dateApplied, progress));
  }

  saveSuccess(redirect) {
    if(redirect) {
      return (
        <div>
        <p className="succes-text">Your job entry has been saved.</p>
        <p>Check it out in your <Link to="/job-collection">job collections</Link></p>
        </div>
      )
    }
    return false;
}

  render() {
    const { redirect, error, handleSubmit, pristine, submitting, reset } = this.props;

    if (error) {
      return <p>Sorry! Something went horribly wrong </p>
    }
    return (
      <div>
      <form className="row" id="add-job-form" onSubmit={handleSubmit(values =>
        this.onSubmit(values)
    )}>
    <fieldset className="col-12">
      <div className="col-12">
      <div className="col-6">
        <Field
          component={Input}
          type="text"
          name="title"
          id="title"
          label="Title"
          validate={[required]}
        />
      </div>
      <div className="col-6">
        <Field
          component={Input}
          type="text"
          name="company"
          id="company"
          label="Company"
          validate={[required]}
        />
      </div>
      </div>
      <div className="col-12">
      <div className="col-6">
        <Field
          component={Input}
          type="text"
          name="location"
          id="location"
          label="Location"
          validate={[required]}
        />
      </div>
      <div className="col-6">
        <Field
          component={DateInput}
          name="dateApplied"
          id="dateApplied"
          label="Date Applied"
          validate={[required]}
        />
      </div>
      </div>
      <div className="col-12">
        {
          progress.map(progressOption => (
            <div className="col-3 progress-container" key={progressOption}>
            <label>{progressOption}</label>
              <Field
                name="progress"
                component="input"
                type="radio"
                value={`${progressOption}`}
                validate={[required]}
              />
            </div>
          ))
        }
        </div>
          </fieldset>
          <div className="col-4">
            <CrudButton
              type={`submit`}
              className={`save-button`}
              text={`Save`}
              disabled={pristine || submitting}
            />

          </div>
          <div className="col-4">
          <Link to="/job-collection">
          <CrudButton
            type={`click`}
            className={`cancel-button`}
            text={`Cancel`}
          />
          </Link>
          </div>
          <div className="col-4">
          <div className="col-12 big-button-container">
            <button type="click" className="reset-button" disabled={pristine || submitting} onClick={reset}
            >
              Reset
            </button>
          </div>
          </div>
        </form>
        {this.saveSuccess(redirect)}
      </div>
    )
  }
}


JobForm = reduxForm({
  form: 'addJobForm',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('addJobForm', Object.keys(errors)[0]))
})(JobForm)

const mapStateToProps = state => ({
  jobs: state.users.jobs,
  error: state.user.error,
  redirect: state.handlers.redirect
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    postJob: postJob,
    toRedirect: toRedirect
  }, dispatch));

JobForm = connect(mapStateToProps, mapDispatchToProps)(JobForm);

export default JobForm

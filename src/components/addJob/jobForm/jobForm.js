import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
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
    console.log(title, company, location, new Date(dateApplied), progress)
    const date = new Date (dateApplied);
    console.log(date)
    //this.props.postJob(user_id, title, company, location, date, progress));
    //this.props.toRedirect(this.props.redirect);
  }

  render() {
    const { redirect, hasError, handleSubmit, pristine, submitting, reset } = this.props;

    if(hasError) {
      return <p>Sorry! Something went horribly wrong </p>
    } else if(redirect) {
      return <Redirect to="/job-collection" />
    } else {
    return (
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
            <button className="reset-button" disabled={pristine || submitting} onClick={reset}
            >
              Reset
            </button>
          </div>
          </div>
        </form>
      )}
    }
}
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
JobForm = reduxForm({
  form: 'addJobForm',
  enableReinitialize: true,
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

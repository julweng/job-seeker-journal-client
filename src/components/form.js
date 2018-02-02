import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './common/input/input';
import { load as loadAccount } from '../actions/account';
import { bindActionCreators } from 'redux';
import { required, number, minValue } from '../validators';
import { toRedirect } from '../actions/handler';
import { postJob } from '../actions/users';
import CrudButton from  './common/crudButton/crudButton';
import './addJob/addJobForm/addJobForm.css';

const user_id = localStorage.getItem('user_id');

const data = {
  title: 'front-end web developer',
  company: 'Illumina',
  location: 'SD, CA',
  dateApplied: '2018-01-08',
  progress: 'on-site interview'
}
const progress = ['resume submitted', 'phone interview', 'on-site interview', 'offer received']

export class AddJobForm extends React.Component {
  componentWillMount() {
    return this.props.load(data);
  }

  onSubmit(values) {
    const { title, company, location, link, dateApplied, progress } = values;
    this.props.toRedirect(this.props.redirect);
    console.log(this.props.toRedirect)
    return this.props
      .dispatch(postJob(user_id, title, company, location, link, dateApplied, progress))
  }

  render() {
    const { hasError, handleSubmit, pristine, submitting, reset } = this.props

    if(hasError) {
      return <p>Sorry! Something went horribly wrong </p>
    }
    return (
      <form className="row" id="add-job-form" onSubmit={handleSubmit(values =>
        this.onSubmit(values)
    )}>
    <fieldset className="col-12">
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
          component={Input}
          type="date"
          name="dateApplied"
          id="date"
          label="Date Applied"
          validate={[required]}
        />
      </div>
      <div className="col-4">&nbsp;</div>
      <div className="col-4">
        <label>Job Application Progress </label>
          <Field name="progress" component="select">
            <option value="">Select your progress...</option>
            {progress.map(progressOption => (
              <option value={progressOption} key={progressOption}>
                {progressOption}
              </option>
            ))}
          </Field>
        </div>
        <div className="col-4">&nbsp;</div>
          </fieldset>
          <div className="col-4">
            <CrudButton
              type={`submit`}
              className={`save-button`}
              text={`Save`}
            />
          </div>
          <div className="col-4">
          <CrudButton
            type={`click`}
            className={`cancel-button`}
            text={`Cancel`}
          />
          </div>
          <div className="col-4">
          <div className="col-12 big-button-container">
            <button id="reset" onClick={reset}
            >
              Reset
            </button>
          </div>
          </div>
        </form>
  )
}
}
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AddJobForm = reduxForm({
  form: 'addJobForm',
  enableReinitialize: true,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('addJobForm', Object.keys(errors)[0]))
})(AddJobForm)

// You have to connect() to any reducers that you wish to connect to yourself
const mapStateToProps = state => ({
  jobs: state.users.jobs,
  error: state.user.error,
  redirect: state.handlers.redirect,
  initialValues: state.account.data
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    postJob: postJob,
    toRedirect: toRedirect,
    load: loadAccount,
  }, dispatch));

AddJobForm = connect(mapStateToProps, mapDispatchToProps)(AddJobForm);

export default AddJobForm

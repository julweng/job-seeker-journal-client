import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../../common/input/input';
import { bindActionCreators } from 'redux';
import { required } from '../../../validators';
import { putJob, getJobFilterById } from '../../../actions/users';
import CrudButton from  '../../common/crudButton/crudButton';
import { closeEditJobForm, getInitialJobValues } from '../../../actions/handler';
import DateInput from '../../common/dateInput/dateInput';
import './editJobForm.css';
import { toRedirect } from '../../../actions/handler';

const user_id = localStorage.getItem('user_id');
const job_id = localStorage.getItem('jobId');

const progress = ['resume submitted', 'phone interview', 'on-site interview', 'offer received']

export class EditJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  componentDidMount() {
    this.props.getJobFilterById(user_id, job_id);
    this.props.getInitialJobValues(this.props.job);
  }

  handleCancelClick() { this.props.closeEditJobForm(this.props.editJob)
  }

  onSubmit(values) {
    const { title, company, location, dateApplied, progress } = values;
    console.log(title, company, location, dateApplied, progress)
    return this.props.dispatch(putJob(user_id, job_id, title, company, location, dateApplied, progress))
  }

  editSuccess(redirect) {
    if(redirect) {
      return (
        <div>
        <p className="succes-text">Your edit has been saved.</p>
        </div>
      )
    }
    return false;
}

  render() {
    const { error, handleSubmit, pristine, submitting, reset, redirect } = this.props

    if(error) {
      return <p>Sorry! Something went horribly wrong </p>
    }
    return (
      <div>
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
            component={DateInput}
            type="date"
            name="dateApplied"
            id="dateApplied"
            label="Date Applied"
            validate={[required]}
          />
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
        <div className="col-4">&nbsp;</div>
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
          <div className="col-12 big-button-container">
            <button type="click" className="reset-button" disabled={pristine || submitting} onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="col-4">
          <CrudButton
            type={`click`}
            className={`cancel-button`}
            text={`Cancel`}
            handleCancelClick={this.handleCancelClick}
          />
        </div>
      </form>
      {this.editSuccess(redirect)}
      </div>
      )
    }
}

EditJobForm = reduxForm({
  form: 'EditJobForm',
  enableReinitialize: true,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('EditJobForm', Object.keys(errors)[0]))
})(EditJobForm)

const mapStateToProps = state => ({
  editJob: state.handlers.editJob,
  jobs: state.users.jobs,
  job: state.users.job,
  error: state.users.error,
  initialValues: state.handlers.jobData,
  redirect: state.handlers.redirect
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    putJob: putJob,
    getJobFilterById: getJobFilterById,
    closeEditJobForm: closeEditJobForm,
    getInitialJobValues: getInitialJobValues,
    toRedirect: toRedirect
  }, dispatch));

EditJobForm = connect(mapStateToProps, mapDispatchToProps)(EditJobForm);

export default EditJobForm

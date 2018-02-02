import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../../common/input/input';
import { loadData } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import { required } from '../../../validators';
import { postJob } from '../../../actions/users';
import CrudButton from  '../../common/crudButton/crudButton';
import './editJobForm.css';

const user_id = localStorage.getItem('user_id');

const data = {
  title: 'front-end web developer',
  company: 'Illumina',
  location: 'SD, CA',
  dateApplied: '2018-01-08',
  progress: 'on-site interview'
}
const progress = ['resume submitted', 'phone interview', 'on-site interview', 'offer received']

export class JobForm extends React.Component {
  componentWillMount() {
    return this.props.loadData(this.props.data);
  }

  onSubmit(values) {
    const { title, company, location, link, dateApplied, progress } = values;

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
              disabled={pristine || submitting}
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
            <button id="reset" disabled={pristine || submitting} onClick={reset}
            >
              Reset
            </button>
          </div>
          </div>
        </form>
  )
}
}

JobForm = reduxForm({
  form: 'addJobForm',
  enableReinitialize: true,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('addJobForm', Object.keys(errors)[0]))
})(JobForm)

const mapStateToProps = state => ({
  jobs: state.users.jobs,
  error: state.user.error,
  initialValues: state.users.data
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    postJob: postJob,
    loadData: loadData
  }, dispatch));

JobForm = connect(mapStateToProps, mapDispatchToProps)(JobForm);

export default JobForm

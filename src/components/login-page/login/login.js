import React from 'react';
import Input from '../../common/input/input';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../../../actions/auth';
import { required, nonEmpty} from '../../../validators';
import CrudButton from '../../common/crudButton/crudButton';
import './login.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }
  onSubmit(values) {
    const { username, password } = values;
    return this.props.dispatch(login(username, password));
  }
  handleDemoClick() {
    return this.props.dispatch(login('abc', '123'));
  }
  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    let loginError;
    if(error) {
      loginError = (
        <div className="form-error" aria-live="polite">
          {error}
        </div>
      );
    }
    return (
      <section className="row">
        <div className="row">
          <div className="col-3">&nbsp;</div>
          <div className="col-6">
              <h3>Continue Tracking</h3>
          </div>
          <div className="col-3">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-3">&nbsp;</div>
          <div className="col-6 signup-form-container">
            <form
              className="col-12 login-form"
              id="login"
              onSubmit={handleSubmit(values =>
                this.onSubmit(values)
            )}>
              {loginError}
              <div className="col-12">
                <label htmlFor="username">Username</label>
                <Field
                  component={Input}
                  type="text"
                  name="username"
                  id="username"
                  validate={[required, nonEmpty]}
                />
              </div>
              <div className="col-12">
                <label htmlFor="password">Password</label>
                <Field
                  component={Input}
                  type="password"
                  name="password"
                  id="password"
                  validate={[required, nonEmpty]}
                />
              </div>
              <CrudButton
                type={`submit`}
                className={`save-button`}
                text={`Log in`}
                disabled={pristine || submitting}
              />
              <CrudButton
                type={`button`}
                className={`cancel-button`}
                text={`Demo`}
                handleDemoClick={this.handleDemoClick}
              />
            </form>
          </div>
          <div className="col-3">&nbsp;</div>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', 'username'))
})(Login);

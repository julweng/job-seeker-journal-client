import React from 'react';
import Input from '../../common/input/input';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../../../actions/auth';
import { required, nonEmpty} from '../../../validators';
import './login.css';

export class Login extends React.Component {
  onSubmit(values) {
    const { username, password } = values;
    return this.props.dispatch(login(username, password));
  }
  render() {
    let error;
    if(this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
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
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
              {error}
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
              <div className="col-12 login-button-container">
                <button
                  type="submit"
                  id="login-button"
                  disabled={ this.props.pristine || this.props.submitting }>
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="col-3">&nbsp;</div>
          <div className="col-12 demo">
            <p>Demo username/password: abc/123</p>
          </div>
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

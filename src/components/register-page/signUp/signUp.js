import React from 'react';
import Input from '../../common/input/input';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../../../actions/users';
import { login } from '../../../actions/auth';
import { required, nonEmpty, matches, length, isTrimmed } from '../../../validators';
import './signUp.css';

const usernameLength = length({ min: 3, max: 8 });
const passwordLength = length({ min: 3, max: 8 });
const matchesPassword = matches('password');

export class SignUp extends React.Component {
  onSubmit(values) {
    const { username, password } = values;
    const user = { username, password };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <section className="row">
        <div className="row">
          <div className="col-3">&nbsp;</div>
          <div className="col-6">
              <h3>Start Tracking Now</h3>
          </div>
          <div className="col-3">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-3">&nbsp;</div>
          <div className="col-6 register-form-container">
            <form
              className="col-12"
              id="register"
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
              <div className="col-12">
                <label htmlFor="username">Username</label>
                <Field
                  component={Input}
                  type="text"
                  name="username"
                  id="username"
                  validate={[required, nonEmpty, isTrimmed, usernameLength]}
                />
              </div>
              <div className="col-12">
                <label htmlFor="password">Password</label>
                <Field
                  component={Input}
                  type="password"
                  name="password"
                  id="password"
                  validate={[required, passwordLength, isTrimmed]}
                />
              </div>
              <div className="col-12">
                <label htmlFor="password">Confirm Password</label>
                <Field
                  component={Input}
                  type="password"
                  name="passwordConfirm"
                  id="password"
                  validate={[required, nonEmpty, matchesPassword]}
                />
              </div>

              <div className="col-12 register-button-container">
                <button
                  type="submit"
                  id="register-button"
                  disabled={ this.props.pristine || this.props.submitting }>
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-3">&nbsp;</div>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUp);

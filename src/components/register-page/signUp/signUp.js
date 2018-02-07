import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../../common/input/input';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser, isRegistered } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import { required, nonEmpty, matches, length, isTrimmed } from '../../../validators';

import './signUp.css';

const usernameLength = length({ min: 3, max: 8 });
const passwordLength = length({ min: 3, max: 8 });
const matchesPassword = matches('password');

export class SignUp extends React.Component {
  onSubmit(values) {
    const { username, password } = values;
    const user = { username, password };
    return this.props.registerUser(user)
      .then(() => this.props.isRegistered(true));
  }
  loginMessage(registered) {
    if(registered) {
      return <p>You are registered!<br/>Please <Link to="/login">log in</Link></p>
    }
    return null;
  }
  render() {
    const { handleSubmit, pristine, submitting, registered } = this.props;
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
              onSubmit={handleSubmit(values =>
                this.onSubmit(values)
            )}>
              <div className="col-12">
                <label htmlFor="username">Username</label>
                <Field
                  component={Input}
                  type="text"
                  name="username"
                  id="username"
                  placeholder={`3-8 characters`}
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
                  placeholder={`3-8 characters`}
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
                  disabled={ pristine || submitting }>
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-3">&nbsp;</div>
        </div>
        {this.loginMessage(registered)}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  registered: state.users.registered
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isRegistered: isRegistered,
    registerUser: registerUser
  }, dispatch));

SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUp);

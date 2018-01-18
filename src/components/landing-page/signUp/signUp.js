import React from 'react';
import { withRouter } from 'react-router-dom';

import './signUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.goToDashboard = this.goToDashboard.bind(this);
  }

  goToDashboard(e) {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <section className="row" id="auth-form">
          <div className="col-12">
              <h3>Start Tracking Now</h3>
          </div>
          <form className="col-12 signup-form" id="register">
              <div className="col-12">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" maxLength="8" placeholder="3-8 characters" required />
              </div>
              <div className="col-12">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" maxLength="8" placeholder="3-8 characters" required />
              </div>
              <div className="col-12">
                <p>Demo username: job</p>
                <p>Demo password: 123</p>
              </div>
              <div className="col-12">
                <button type="submit" id="sign-up-button">Register</button>
              </div>
              <div className="col-12">
                <button type="submit" id="login-button">Log in</button>
              </div>
              <div className="col-12">
                <button type="button" id="demo-button" onClick={this.goToDashboard}>
                  Demo
                </button>
              </div>
          </form>
        </section>
    );
  }
}

export default withRouter(SignUp);

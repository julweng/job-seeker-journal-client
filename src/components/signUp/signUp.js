import React from 'react';

import './signUp.css';

export default function SignUp(props) {
  return (
    <section className="row">
        <div className="col-12">
            <h3>Start Tracking Now</h3>
        </div>
        <form className="col-12 signup-form">
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
              <button type="submit" id="login">Log in</button>
            </div>
            <div className="col-12">
              <button type="submit" id="sign-up">Sign Up</button>
            </div>
        </form>
      </section>
  );
}

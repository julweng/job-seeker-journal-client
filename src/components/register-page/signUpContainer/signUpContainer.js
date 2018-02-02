import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import SignUp from '../signUp/signUp';
import './signUpContainer.css';

export function SignUpContainer(props) {
    // If registration is successful, automatically log in
    //if logged in, redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div id="register-form">
          <SignUp />
        <Link to="/auth/login">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpContainer);

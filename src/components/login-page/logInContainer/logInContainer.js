import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../login/login';
import './logInContainer.css';

export function LogInContainer(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div id="login-form">
          <Login />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogInContainer);

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './landing-page/landing';
import LoginPage from './login-page/login-page';
import RegisterPage from './register-page/register-page';
import Dashboard from './dashboard/dashboard';
import Profile from './profile/profile';
import AddJob from './addJob/addJob';
import JobCollection from './jobCollection/jobCollection';
import EditJob from './editJob/editJob';
import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn && !this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if(!nextProps.loggedIn && this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 * 3 //three hours
    )
  }
stopPeriodicRefresh() {
  if(!this.refreshInterval) {
    return;
  }
  clearInterval(this.refreshInterval);
}
  render() {
    const routes = (
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
    		    <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/edit-job' component={EditJob} />
    		    <Route exact path='/add-job' component={AddJob} />
            <Route exact path='/job-collection' component={JobCollection} />
          </div>
    );
    return (
    <Router>
      {routes}
    </Router>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authoToken !== null,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(App);

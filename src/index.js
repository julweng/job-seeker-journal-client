import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import './index.css';
import './grid.css';
import Landing from './components/landing-page/landing';
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/profile/profile';
import AddJob from './components/addJob/addJob';
import JobCollection from './components/jobCollection/jobCollection'
import EditJob from './components/editJob/editJob';


const routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Landing} />
		    <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/edit-job' component={EditJob} />
		    <Route exact path='/add-job' component={AddJob} />
        <Route exact path='/job-collection' component={JobCollection} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(
    routes,
  document.getElementById('root')
);

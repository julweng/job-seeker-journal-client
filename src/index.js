import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './grid.css';
import Landing from './components/landing';
import Dashboard from './components/dashboard';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Link, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
class App extends React.Component {
  render () {
    return (
      <div>
        <Link to="/landing">Landing</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    )
  }
}
ReactDOM.render(
  <Provider store={store}>
    <div>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="landing" component={Landing}/>
        <Route path="dashboard" component={Dashboard}/>
      </Route>
    </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)



//import Profile from './components/profile';
//import AddJob from './components/addJob';
//import JobCollection from './components/jobCollection'
//import EditJob from './components/editJob';

//ReactDOM.render(
  //<Landing />,
  //<Dashboard />,
  //<Profile />,
  //<AddJob />,
  //<JobCollection />,
  //<EditJob />,
  //document.getElementById('root')
//);

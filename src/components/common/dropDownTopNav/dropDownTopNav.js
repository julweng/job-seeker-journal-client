import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {clearAuth} from '../../../actions/auth';
import {clearAuthToken} from '../../../local-storage';

import './dropDownTopNav.css';

export class DropDownTopNav extends React.Component {
  logOut() {
    this.props.clearAuth();
    clearAuthToken();
    console.log(this.props.loggedIn)
  }

  logOutLink(loggedIn) {
    if(loggedIn) {
      return (
        <li className="smallScreenHidden">
          <a href="/" onClick={()=>this.logOut()}>Log out</a>
        </li>
      )
    }
    return false;
  }

  render () {
    const links = this.props.links.map((link, index) => (
      <li key={index}>
        <a href={link.href}>
          {link.text}
        </a>
      </li>
    ));

    return (
      <div className="drop-down-top-nav largeScreenHidden">
        <ul>
          {links}
          { this.logOutLink(this.props.loggedIn) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.markup.nav,
    isOpen: state.handlers.isOpen,
    loggedIn: state.auth.currentUser !== null
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    clearAuth: clearAuth,
    clearAuthToken: clearAuthToken
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(DropDownTopNav);

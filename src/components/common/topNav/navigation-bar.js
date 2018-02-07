import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleOpen } from '../../../actions/handler';
import './navigation-bar.css';
import DropDownTopNav from '../dropDownTopNav/dropDownTopNav';
import {clearAuth} from '../../../actions/auth';
import {clearAuthToken} from '../../../local-storage';

export class TopNav extends React.Component {
  logOut() {
    localStorage.clear();
    this.props.clearAuth();
    clearAuthToken();
    }

  logOutLink(loggedIn) {
    if(loggedIn) {
      return (
        <li className="smallScreenHidden">
          <a href="/" className="logout" onClick={()=>this.logOut()}>Log out</a>
        </li>
      )
    }
    return false;
  }

  render () {
    const links = this.props.loggedIn ? this.props.nav.userNav : this.props.nav.landingNav;

    const topNav = (
      <ul>
        {
          links.map((link, index) => (
            <li className="smallScreenHidden" key={index}>
              <a
                href={link.href}
                aria-label={link.text}
              >
                {link.text}
              </a>
            </li>
          ))
        }
          { this.logOutLink(this.props.loggedIn) }

          <li className="smallScreenDisplay">
            <a
              href="#more"
              aria-label="more"
              className="toggle-open"
              onClick={() => this.props.toggleOpen(this.props.isOpen)}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      );

      const displayDropDown = this.props.isOpen ? 'smallScreenDisplay' : 'smallScreenHidden';

      return (
        <nav>
          {topNav}
          <div className={displayDropDown}>
            <DropDownTopNav links={links} />
          </div>
        </nav>
        )
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
    toggleOpen: toggleOpen,
    clearAuth: clearAuth,
    clearAuthToken: clearAuthToken
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);

TopNav.defaultProps = {
  nav: {
    userNav: [],
    landingNav: []
  },
  isOpen: false
}

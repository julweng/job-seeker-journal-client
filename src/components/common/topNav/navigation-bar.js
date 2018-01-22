import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleOpen } from '../../../actions/handler'

import './navigation-bar.css';
import DropDownTopNav from '../dropDownTopNav/dropDownTopNav';

export function TopNav(props) {
    let loggedIn = true; //check this later
    const links = loggedIn ? props.nav.userNav : props.nav.landingNav;
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
          <li className="smallScreenDisplay">
            <a
              href="#more"
              aria-label="more"
              onClick={() => props.toggleOpen(props.isOpen)}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      );

      const displayDropDown = props.isOpen ? 'smallScreenDisplay' : 'smallScreenHidden';

    return (
      <nav>
        {topNav}
        <div className={displayDropDown}>
          <DropDownTopNav links={links} />
        </div>
      </nav>
    )
  }

const mapStateToProps = state => ({
  nav: state.markup.nav,
  isOpen: state.handlers.isOpen
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleOpen: toggleOpen }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);

TopNav.defaultProps = {
  nav: {
    userNav: [],
    landingNav: []
  },
  isOpen: false
}

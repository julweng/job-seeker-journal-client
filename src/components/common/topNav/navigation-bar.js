import React from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleOpen } from '../../../actions/handler'
import './navigation-bar.css';

import DropDownTopNav from '../dropDownTopNav/dropDownTopNav';

class TopNav extends React.Component {

  render() {

    let loggedIn = true; //check this later
    const links = loggedIn ? this.props.markup.userNav : this.props.markup.landingNav;

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

const mapStateToProps = state => ({
  markup: state.markup,
  isOpen: state.handlers.isOpen
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleOpen: toggleOpen }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
/*
   constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      links: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  displayDropDown(isShow) {
    if(isShow) {
      return "smallScreenDisplay";
    }
    return "smallScreenHidden";
  }

  render() {
    const links = this.state.links.map((link, index) => (
      <li className="smallScreenHidden" key={index}>
        <a
          href={link.href}
          aria-label={link.text}
        >
          {link.text}
        </a>
      </li>
    ));
    return (
      <nav>
        <ul>
        {links}
        <li className="smallScreenDisplay">
          <a
            href="#more"
            aria-label="more"
            onClick={this.handleClick}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <div
        className={this.displayDropDown(this.state.isShow)}
      >
        <DropDownTopNav links={this.props.links} />
      </div>
      </nav>
    )
  }
}
*/

import React from 'react';

import './navigation-bar.css';
import DropDownTopNav from '../dropDownTopNav/dropDownTopNav';

export default class TopNav extends React.Component {
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
    let links = this.props.links.map((link, index) => (
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

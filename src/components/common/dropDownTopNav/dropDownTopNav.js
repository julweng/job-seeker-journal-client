import React from 'react';

import './dropDownTopNav.css';

export default class DropDownTopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  render() {
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
        </ul>
      </div>
    );
  }
}

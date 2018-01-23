import React from 'react';

import './dropDownTopNav.css';

export default function DropDownTopNav(props) {
  const links = props.links.map((link, index) => (
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

DropDownTopNav.defaultProps = {
  links:[
    {
      href:'',
      text: ''
    }
  ]
}

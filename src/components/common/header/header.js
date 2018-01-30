import React from 'react';

import './header.css';

export default function Header(props) {
  return (
    <header id={props.headerId}>
      <h1 id={props.h1Id}>{props.h1Text}</h1>
      {props.h2Text}
      <div>{props.component}</div>
    </header>
  );
}

Header.defaultProps = {
  headerId: '',
  h1Id: '',
  h1Text: '',
  h2Text: '',
  component: '',
}

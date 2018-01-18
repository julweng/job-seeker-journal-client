import React from 'react';

import '../userHeader/userHeader.css';

export default function UserHeader(props) {
  return (
    <header id="user-header">
      <h1>{props.text}</h1>
    </header>
  );
}

UserHeader.defaultProps = {
  text: ''
};

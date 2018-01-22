import React from 'react';

import './crudButton.css'

export default function CrudButton (props) {

    return (
      <div className="col-12 big-button-container">
        <button
          type={props.type}
          className={props.className}
          onClick={props.handleClick || props.handleAddSkillClick}
        >
          {props.text}
        </button>
      </div>
    );
}

CrudButton.defaultProps = {
  className: '',
  handleClick: undefined,
  handleAddSkillClick: undefined,
  text: '',
  type: ''
}

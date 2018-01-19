import React from 'react';

import './editButton.css'

export default class EditButton extends React.Component {
  render() {
    return (
      <div className="col-12 edit-button-container">
        <button
          type="button"
          className="edit-button"
          onClick={this.props.handleClick}
        >
          Edit
        </button>
      </div>
    );
  }
}

import React from 'react';

import './addButton.css'

export default class AddButton extends React.Component {
  render() {
    return (
      <div className="col-12 add-button-container">
        <button
          type="button"
          className="add-button"
          onClick={this.props.handleClick}
        >
          +Skills
        </button>
      </div>
    );
  }
}

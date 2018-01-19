import React from 'react';

import './cancelButton.css'

export default class CancelButton extends React.Component {
  render() {
    return (
      <div className="col-12 cancel-button-container">
        <button
          type="button"
          className="cancel-button"
          onClick={this.props.handleClick}
        >
          cancel
        </button>
      </div>
    );
  }
}

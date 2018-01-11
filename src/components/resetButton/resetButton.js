import React from 'react';

import './resetButton.css'

export default function ResetButton(props) {
  return (
    <div className="col-4 reset-button-container">
      <button type="button" className="reset-button">reset</button>
    </div>
  );
}

import React from 'react';

import './monthButton.css'

export default function MonthButton (props) {
  const monthButtons = [];
  if(props) {
    monthButtons.push(props.months.map((month, index) =>
      <button
        type="button"
        className="month-button active"
        key={`${index}`}
        id={`month-button-${index}`}
        onClick = {props.handleClick}
      >
        {month}
      </button>
    ))
  }

  return (
      <div className="col-12 month-button-container">
        {monthButtons}
      </div>
  );
}

MonthButton.defaultProps = {
  months: ['Jan-Mar']
}

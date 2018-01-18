import React from 'react';

import './monthButton.css'

export default function MonthButton(props) {
  const months = ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'];

  const monthButtons = months.map((month, index) =>
      <button
        type="button"
        className="month-button active"
        key={`month-button-${index}`}
        id={`month-button-${index}`}>
          {month}
      </button>
  );
  return (
    <div className="row">
      <div className="col-12 month-button-container">
        {monthButtons}
      </div>
    </div>
  );
}

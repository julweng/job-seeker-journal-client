import React from 'react';

export default function DateInput(props) {
  return (
    <div className="col-12">
      <label htmlFor="date-applied">Date applied:</label>
      <input type="date" name="date-applied" min="2017-04-01" required />
    </div>
  );
}

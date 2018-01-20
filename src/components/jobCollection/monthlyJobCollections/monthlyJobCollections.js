import React from 'react';

import './monthlyJobCollections.css';
import JobItem from '../../jobItem/jobItem';

export default class MonthlyJobCollections extends React.Component {
  render() {
    const warning = <p>~*<a href="/add-job">Add jobs</a> to your collection *~</p>;

    if(!this.props.jobs || this.props.jobs.length === 0) {
      return (
      <div className="row profile-warning-container">
        <div className="col-12">
          {warning}
        </div>
      </div>
      );
    }

    const jobs = this.props.jobs.map((job, index) =>
      <li key={index}>
        <JobItem
          id={job.id}
          title={job.title}
          date={job.date}
        />
      </li>
    )

    return (
      <div className="col-12 month-card-container">
        <h3>{this.props.month}</h3>
        <ul className="col-4 job-item-list">
          {jobs}
        </ul>
      </div>
    );
  }
}
MonthlyJobCollections.defaultProps = {
  month: 'Jan',
  jobs: [
    {
      id: 1,
      title: 'front-end web developer',
      date: '01/08/2018'
    },
    {
      id: 2,
      title: 'front-end web developer',
      date: '01/18/2018'
    }
  ]
}

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
          company={job.company}
        />
      </li>
    )

    return (
      <div className="col-12 month-card-container">
        <div className="col-4 month-collection-container">
          <h3>{this.props.month}</h3>
          <ul className="col-12 job-item-list">
            {jobs}
          </ul>
        </div>
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
      company: 'illumina'
    },
    {
      id: 2,
      title: 'front-end web developer',
      company: 'amazon'
    }
  ]
}

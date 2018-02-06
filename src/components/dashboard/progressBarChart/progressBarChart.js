import React from 'react';
import { Link } from 'react-router-dom';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid,
        ResponsiveContainer, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { getJobs } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import './progressBarChart.css';

function monthToInt(date) {
  return parseInt(moment(date).format("M"), 10);
}

function jobsBySeason(jobs, start, end) {
  return jobs.filter(job => monthToInt(job.dateApplied) >= start && monthToInt(job.dateApplied) <= end)
}

function setPeriod(start, end) {
  let period = '';
  if(start === 1 && end === 3) {
    period = 'Jan-Mar';
  } else if (start === 4 && end === 6) {
    period = 'Apr-Jun';
  } else if (start === 7 && end === 9) {
    period = 'Jul-Sept';
  } else if (start === 10 && end === 12) {
    period = 'Oct-Dec';
  }
  return period;
}

function jobBySeasonData(jobs, start, end) {
  let jobArrayBySeason = jobsBySeason(jobs, start, end);
  let phoneCount = 0;
  let onSiteCount = 0;
  let offerCount = 0;
  let applied = jobArrayBySeason.length;
  // eslint-disable-next-line
  jobArrayBySeason.forEach(job => (job.progress).trim() == ('phone interview').trim() ? phoneCount += 1 : phoneCount)
  // eslint-disable-next-line
  jobArrayBySeason.forEach(job => (job.progress).trim() == ('on-site interview').trim() ? onSiteCount += 1 : onSiteCount)
  // eslint-disable-next-line
  jobArrayBySeason.forEach(job => (job.progress).trim() == ('offer received').trim() ? offerCount += 1 : offerCount)

  return {
    period: setPeriod(start, end),
    phone: phoneCount,
    'on-site': onSiteCount,
    offer: offerCount,
    applied: applied
  }
}

function progressChartData(jobs) {
  const chartData = [];
  chartData.push(
    jobBySeasonData(jobs, 1, 3),
    jobBySeasonData(jobs, 4, 6),
    jobBySeasonData(jobs, 7, 9),
    jobBySeasonData(jobs, 10, 12)
  )
  return chartData
}

export class ProgressBarChart extends React.Component {
  componentDidMount() {
    this.props.getJobs(this.props.currentUser.id);
  }

  render() {
    if(this.props.jobs.length === 0) {
      return (
        <p>You have not made any progress. Please <Link to="/add-job"> Add Job </Link> or <br />view your <Link to="/job-collection"> Job Collection </Link> and select jobs to edit your progress</p>
      )
    }
    return (
      <div className="row">
        <div className="col-2">&nbsp;</div>
        <div className="col-8 chart-container">
          <h3>Progress Summary</h3>
          <ResponsiveContainer aspect={2}>
      	    <BarChart data={progressChartData(this.props.jobs)}
              margin={{top: 3, right: 4, left: 4, bottom: 3}}>
              <XAxis dataKey="period" />
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="phone" fill="#379392" />
              <Bar dataKey="on-site" fill="#92d6db" />
              <Bar dataKey="offer" fill="#032f5b" />
              <Bar dataKey="applied" fill="#007fff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-2">&nbsp;</div>
        <div className="col-12 edit-container">
          <Link to="/job-collection">
            Edit Job Collection...
          </Link>
        </div>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    jobs: state.users.jobs,
    currentUser: state.auth.currentUser
  });

  const mapDispatchToProps = dispatch => (
    bindActionCreators({
      getJobs: getJobs
    }, dispatch));

  export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarChart);

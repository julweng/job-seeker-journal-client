import React from 'react';
import { Link } from 'react-router-dom';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid,
        ResponsiveContainer, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';

import './progressBarChart.css';

export function ProgressBarChart(props) {
  return (
    <div className="row">
      <div className="col-12 chart-container">
        <h3>Progress Summary</h3>
        <ResponsiveContainer aspect={2}>
    	    <BarChart data={props.progressPerSeason}
            margin={{top: 3, right: 4, left: 4, bottom: 3}}>
            <XAxis dataKey="period" />
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="phone" fill="#8884d8" />
            <Bar dataKey="on-site" fill="#82ca9d" />
            <Bar dataKey="offer" fill="#FFD256" />
            <Bar dataKey="applied" fill="#BD9391" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="col-12 edit-container">
        <Link to="/job-collection">
          Edit Job Collection...
        </Link>
      </div>
    </div>
    );
  }

  const mapStateToProps = state => ({
    progressPerSeason: state.user.progressPerSeason
  });

  export default connect(mapStateToProps)(ProgressBarChart);

  ProgressBarChart.defaultProps = {
    progressPerSeason: []
  }

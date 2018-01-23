import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Radar, RadarChart, PolarGrid,
  ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

import './skillChart.css';

export function SkillChart(props) {
  return (
    <div className="row">
      <div className="col-12 chart-container">
        <h3>Skill Chart</h3>
        <p>(experience in years)</p>
        <ResponsiveContainer aspect={2}>
  	     <RadarChart data={props.skills}>
            <PolarGrid />
            <PolarAngleAxis dataKey='name' />
            <PolarRadiusAxis/>
            <Radar dataKey='experience' stroke="#FFD256" fill="#FFD256" fillOpacity={0.5}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
        <div className="col-12 edit-container">
          <Link to="/profile">
            Edit Profile...
          </Link>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  skills: state.user.skills
});

export default connect(mapStateToProps)(SkillChart);

SkillChart.defaultProps = {
  skills: []
}

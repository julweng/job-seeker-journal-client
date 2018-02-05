import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, getSkills } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import {
  Radar, RadarChart, PolarGrid,
  ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import './skillChart.css';

const username = localStorage.getItem('username');

export class SkillChart extends React.Component {
  componentDidMount() {
    this.props.getUser(username);
    const user_id = localStorage.getItem('user_id');
    this.props.getSkills(user_id);
  }

  render () {
    const { error, skills } = this.props;
    let currentSkills = [];

    if (error) {
      return (
        <p>You may not have saved any skills. Please add some skills in your profile!</p>
      )
    } else {
      currentSkills = skills.map(skill => {
        return {
          skill: skill.skill,
          experience: skill.experience,
          fullMark: 20
        }
      });
    }
    return (
      <div className="row">
        <div className="col-12 chart-container">
          <h3>Skill Chart</h3>
          <p>experience in years</p>
          <ResponsiveContainer aspect={2}>
    	     <RadarChart data={currentSkills}>
              <PolarGrid />
              <PolarAngleAxis dataKey='skill' />
              <PolarRadiusAxis/>
              <Radar dataKey='experience' stroke="#37b5bf" fill="#92d6db" fillOpacity={0.5}/>
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
}

const mapDispatchToProps = dispatch => (
  bindActionCreators ({
    getUser: getUser,
    getSkills: getSkills
  }, dispatch)
)

const mapStateToProps = state => {
  return {
    skills: state.users.skills,
    error: state.users.err,
    currentUser: state.auth.currentUser,
    user: state.users.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillChart);

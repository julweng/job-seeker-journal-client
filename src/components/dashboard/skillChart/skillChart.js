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
    console.log(user_id)
    this.props.getSkills(user_id);
  }

  render () {
    let currentSkills = [];

    if (this.props.error) {
      return <p>Oops! There was an error loading the items.</p>;
    } else if (this.props.skills.length === 0) {
      return (
        <p>You have no recorded skills. Please add some skills in your profile!</p>
      )
    } else {
      currentSkills = this.props.skills.map(skill => {
        return {
          skill: skill.skill,
          experience: skill.experience,
          fullMark: 20
        }
      });
    }
    console.log(currentSkills)
    return (
      <div className="row">
        <div className="col-12 chart-container">
          <h3>Skill Chart</h3>
          <ResponsiveContainer aspect={2}>
    	     <RadarChart data={currentSkills}>
              <PolarGrid />
              <PolarAngleAxis dataKey='skill' />
              <PolarRadiusAxis/>
              <Radar dataKey='experience' stroke="#FFD256" fill="#FFD256" fillOpacity={0.5}/>
            </RadarChart>
          </ResponsiveContainer>
          <p>(experience in years)</p>
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

SkillChart.defaultProps = {
  skills: [],
  userId: ''
}

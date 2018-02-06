import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSkills } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import {
  Radar, RadarChart, PolarGrid,
  ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import './skillChart.css';

export class SkillChart extends React.Component {
  componentDidMount() {
    this.props.getSkills(this.props.currentUser.id);
  }

  render () {
    const { error, skills } = this.props;
    const userSkills = skills.map(skill => {
      return {
        skill: skill.skill,
        experience: parseInt(skill.experience, 10),
        fullMark: 20
      }
    });
    if(error) {
      return (
        <p>Sorry! Something went horribly wrong. Relog and try again.</p>
      )
    } else if (skills.length === 0) {
      return (
        <p>You may not have saved any skills. Please go to your
          <Link to="/profile"> profile </Link>
        to add some skills !</p>
      )
    } else {
      return (
        <div className="row">
          <div className="col-12 chart-container">
            <h3>Skill Chart</h3>
            <p>experience in years</p>
            <ResponsiveContainer aspect={2}>
              <RadarChart data={userSkills}>
                <PolarGrid />
                <PolarAngleAxis dataKey='skill' />
                <PolarRadiusAxis/>
                <Radar dataKey='experience' stroke="#37b5bf" fill="#92d6db"   fillOpacity={0.5}/>
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
}

const mapDispatchToProps = dispatch => (
  bindActionCreators ({
    getSkills: getSkills
  }, dispatch)
)

const mapStateToProps = state => {
  return {
    skills: state.users.skills,
    error: state.users.err,
    currentUser: state.auth.currentUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillChart);

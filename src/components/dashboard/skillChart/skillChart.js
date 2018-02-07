import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSkills } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import {
  Radar, RadarChart, PolarGrid,
  ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import FontAwesome from 'react-fontawesome';
import './skillChart.css';

export class SkillChart extends React.Component {
  componentDidMount() {
    this.props.getSkills(this.props.currentUser.id);
  }

  showSkillChart(skills) {
    if(skills) {
      return skills.map(skill => {
        return {
          skill: skill.skill,
          experience: parseInt(skill.experience, 10),
          fullMark: 15
        }
      })
    }
    return null;
  }

  render () {
    const { error, skills, loading } = this.props;

    if(error) {
      return (
        <p>Sorry! Something went horribly wrong. Relog and try again.</p>
      )
    }

    if(loading) {
      return (
        <FontAwesome
        name='spinner'
        size='3x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      )
    }

    if(skills.length === 0) {
      return (
        <p>you have not entered any skills yet<br/>
        Add/Edit your skills in <Link to="/profile">Profile</Link></p>
      )
    }

    return (
      <div className="row">
        <div className="col-12 chart-container">
          <h3>Skill Chart</h3>
          <p>experience in years</p>
          <ResponsiveContainer aspect={2}>
            <RadarChart data={this.showSkillChart(skills)}>
              <PolarGrid />
              <PolarAngleAxis dataKey='skill' />
              <PolarRadiusAxis/>
              <Radar dataKey='experience' stroke="#37b5bf" fill="#92d6db"   fillOpacity={0.5}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-12 edit-container">
          <Link to="/profile">
            Add skills to your Profile...
          </Link>
        </div>
      </div>
    );
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
    loading: state.users.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillChart);

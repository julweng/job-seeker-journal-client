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
    const user_id = localStorage.getItem('userId')
    this.props.getSkills(user_id);
  }
  render () {
    let currentSkills = [];

    if (this.props.hasError) {
      return <p>Sorry! There was an error loading the items</p>;
    } else if (this.props.isLoading) {
      return <p>Loading ...</p>;
    } else if (this.props.skills.length === 0) {
      return (
        <p>You have no recorded skills. Please add some skills in your profile!</p>
      )
    } else {
      currentSkills = this.props.skills.map(skill => {
        return {
          id: skill.id,
          skill: skill.skill,
          experience: skill.experience
        }
      });
    }
    console.log(this.props.skills);
    return (
      <div className="row">
        <div className="col-12 chart-container">
          <h3>Skill Chart</h3>
          <p>(experience in years)</p>
          <ResponsiveContainer aspect={2}>
    	     <RadarChart data={currentSkills}>
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
}

const mapDispatchToProps = dispatch => (
  bindActionCreators ({
    getSkills: user_id => getSkills(user_id)
  }, dispatch)
)

const mapStateToProps = state => {
  return {
    skills: state.users.items,
    hasError: state.users.itemHasErrored,
    isLoading: state.users.itemIsLoading,
    currentUser: state.auth.currentUser

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillChart);

SkillChart.defaultProps = {
  skills: [],
  userId: ''
}

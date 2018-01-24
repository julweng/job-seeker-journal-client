import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import SkillChart from './skillChart/skillChart'
import ProgressBarChart from './progressBarChart/progressBarChart';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';
//import requiresLogin from './requiresLogin/requiresLogin';
import  { fetchProtectedData } from '../../actions/protected-data';

export class Dashboard extends React.Component {
  ComponentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }
  render() {
    const { header, protectedData, username } = this.props;
    return (
      <div>
        <TopNav />
        <main role="main">
          <Header
            headerId={header.headerId}
            h1Id={header.h1Id}
            h1Text={`${username}'s ${header.h1Text}`}
          />
          <SkillChart />
          <ProgressBarChart />
          <div className="dashboard-protected-data">
            Protected data: {protectedData}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
    return {
      //username: state.auth.currentUser.username,
      header: state.markup.header.dashboard,
      //protectedData: state.protectedData.data
    };
};

//export default requiresLogin()(connect(mapStateToProps)(Dashboard));

export default connect(mapStateToProps)(Dashboard);

Dashboard.defaultProps = {
  header: {
    dashboard: {
      headerId: '',
      h1Id: '',
      h1Text: ''
    }
  }
}

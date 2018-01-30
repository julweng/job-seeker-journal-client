import React from 'react';
import { connect } from 'react-redux';
import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import SkillChart from './skillChart/skillChart'
import ProgressBarChart from './progressBarChart/progressBarChart';
import Footer from '../common/footer/footer';
import requiresLogin from '../common/requiresLogin/requiresLogin';

export class Dashboard extends React.Component {

  render() {
    const { header, username, userId } = this.props;
    console.log(userId)
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
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
    return {
      username: currentUser.username,
      userId: currentUser.id,
      header: state.markup.header.dashboard
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

Dashboard.defaultProps = {
  header: {
    dashboard: {
      headerId: '',
      h1Id: '',
      h1Text: ''
    }
  }
}

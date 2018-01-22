import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import SkillChart from './skillChart/skillChart'
import ProgressBarChart from './progressBarChart/progressBarChart';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';

export function Dashboard(props) {
  return (
    <div>
      <TopNav />
      <main role="main">
      <Header
        headerId={props.header.headerId}
        h1Id={props.header.h1Id}
        h1Text={props.header.h1Text}
      />
        <SkillChart />
        <ProgressBarChart />
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.markup.header.dashboard
});

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

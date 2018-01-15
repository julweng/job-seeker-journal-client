import React from 'react';

import UserNav from '../components/userNav/userNav';
import UserHeader from '../components/userHeader/userHeader';
import SkillChart from '../components/skillChart/skillChart'
import ProgressBarChart from '../components/progressBarChart/progressBarChart';
import Footer from '../components/footer/footer';

const headerText = 'Profile Summary';

export default class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <UserNav />
        <main role="main">
          <UserHeader text={headerText}/>
          <SkillChart />
          <ProgressBarChart />
        </main>
        <Footer />
      </div>
    );
  }
}

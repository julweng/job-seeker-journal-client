import React from 'react';

import UserNav from './common/userNav/userNav';
import UserHeader from './common/userHeader/userHeader';
import SkillChart from '../components/skillChart/skillChart'
import ProgressBarChart from '../components/progressBarChart/progressBarChart';
import Footer from './common/footer/footer';

const headerText = 'Profile Summary';

export default function Dashboard(props) {
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
/*
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
*/

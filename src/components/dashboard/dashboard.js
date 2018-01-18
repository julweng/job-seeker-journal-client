import React from 'react';

import UserNav from '../common/userNav/userNav';
import UserHeader from '../common/userHeader/userHeader';
import SkillChart from './skillChart/skillChart'
import ProgressBarChart from './progressBarChart/progressBarChart';
import Footer from '../common/footer/footer';

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

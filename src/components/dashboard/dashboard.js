import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import SkillChart from './skillChart/skillChart'
import ProgressBarChart from './progressBarChart/progressBarChart';
import Footer from '../common/footer/footer';

const header = {
  headerId: 'user-header',
  h1Id: 'user-header-title',
  h1Text: 'Profile Summary',
  h2Text: ''
}

export default function Dashboard(props) {
  return (
    <div>
      <TopNav />
      <main role="main">
      <Header
        headerId={header.headerId}
        h1Id={header.h1Id}
        h1Text={header.h1Text}
      />
        <SkillChart />
        <ProgressBarChart />
      </main>
      <Footer />
    </div>
  );
}

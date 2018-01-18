import React from 'react';

import UserNav from '../common/userNav/userNav';
import UserHeader from '../common/userHeader/userHeader';
import CurrentSkill from './currentSkill/currentSkill';
import Footer from '../common/footer/footer';

const headerText = 'Edit Profile';

const skills = [
  {
    id: '1',
    skill: 'HTML',
    experience: {
      months: 0,
      years: 1
    }
  },
  {
    id: '2',
    skill: 'CSS3',
    experience: {
      months: 0,
      years: 1
    }
  }
]

export default function Profile(Props) {
  return (
    <div>
      <UserNav />
      <main role="main">
        <UserHeader text={headerText}/>
        <section>
          <CurrentSkill skills={skills}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

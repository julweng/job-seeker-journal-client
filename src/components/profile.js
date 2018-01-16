import React from 'react';

import UserNav from '../components/userNav/userNav';
import UserHeader from '../components/userHeader/userHeader';
import CurrentSkill from '../components/currentSkill/currentSkill';
import AddSkillForm from '../components/addSkillForm/addSkillForm';
import Footer from '../components/footer/footer';

const headerText = 'Edit Profile';

const skills = [
  {
    skill: 'HTML',
    experience: {
      months: 0,
      years: 1
    }
  },
  {
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
          <AddSkillForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

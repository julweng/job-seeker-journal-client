import React from 'react';

import UserNav from '../components/userNav/userNav';
import UserHeader from '../components/userHeader/userHeader';
import CurrentSkill from '../components/currentSkill/currentSkill';
import AddSkillForm from '../components/addSkillForm/addSkillForm';
import Footer from '../components/footer/footer';

const headerText = 'Profile Editor';

const skills =[];

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

import React from 'react';

import UserNav from '../components/userNav/userNav';
import UserHeader from '../components/userHeader/userHeader';
import CurrentSkill from '../components/currentSkill/currentSkill';
import AddSkillForm from '../components/addSkillForm/addSkillForm';
import Footer from '../components/footer/footer';

const headerText = 'New Job Application';

const skills =[];
/*
const skills = [
  {
    name: 'HTML5',
    experience: '6 month(s)',
  },
  {
    name: 'CSS3',
    experience: '6 month(s)',
  },
  {
    name: 'JavaScript',
    experience: '6 month(s)',
  },
];
*/
export default function AddJob(Props) {
  return (
    <div>
      <UserNav />
      <main role="main">
        <UserHeader text={headerText}/>
        <section>
        
        </section>
      </main>
      <Footer />
    </div>
  );
}

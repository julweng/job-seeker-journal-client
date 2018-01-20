import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import CurrentSkill from './currentSkill/currentSkill';
import Footer from '../common/footer/footer';

const links = [
  {
    text: 'Dashboard',
    href: '/dashboard'
  },
  {
    text: 'Profile',
    href: '/profile'
  },
  {
    text: 'Add Job',
    href: '/add-job'
  },
  {
    text: 'Job Collection',
    href: '/job-collection'
  },
  {
    text: 'Log out',
    href: '/'
  }
];

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
];

const header = {
  headerId: 'user-header',
  h1Id: 'user-header-title',
  h1Text: 'Edit Profile',
  h2Text: ''
}

export default function Profile(Props) {
  return (
    <div>
      <TopNav links={links} />
      <main role="main">
        <Header
          headerId={header.headerId}
          h1Id={header.h1Id}
          h1Text={header.h1Text}
        />
        <section>
          <CurrentSkill skills={skills}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

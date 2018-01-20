import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import AddJobForm from './addJobForm/addJobForm';
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

const header = {
  headerId: 'user-header',
  h1Id: 'user-header-title',
  h1Text: 'Add Job',
  h2Text: ''
}

export default function AddJob(Props) {
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
          <AddJobForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

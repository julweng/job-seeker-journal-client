import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import MonthlyJobCollections from './monthlyJobCollections/monthlyJobCollections';
import MonthButton from './monthButton/monthButton';
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
  h1Text: 'Job Collection',
  h2Text: ''
}

export default function JobCollection(Props) {
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
          <div className="row">
            <p>Select to view job items for a specific month</p>
            <p>Click the job item to edit</p>
            <MonthButton />
          </div>
          <div className="row">
            <MonthlyJobCollections />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

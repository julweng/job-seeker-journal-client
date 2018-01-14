import React from 'react';

import UserNav from '../components/userNav/userNav';
import UserHeader from '../components/userHeader/userHeader';
import MonthlyJobCollections from '../components/monthlyJobCollections/monthlyJobCollections';
import MonthButton from '../components/monthButton/monthButton';
import Footer from '../components/footer/footer';

const headerText = 'Job Collection';

const janJobTitles = [
  'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor', 'incididunt ut'
];

export default function JobCollection(Props) {
  return (
    <div>
      <UserNav />
      <main role="main">
        <UserHeader text={headerText}/>
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

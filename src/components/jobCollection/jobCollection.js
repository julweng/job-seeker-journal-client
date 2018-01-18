import React from 'react';

import UserNav from '../common/userNav/userNav';
import UserHeader from '../common/userHeader/userHeader';
import MonthlyJobCollections from './monthlyJobCollections/monthlyJobCollections';
import MonthButton from './monthButton/monthButton';
import Footer from '../common/footer/footer';

const headerText = 'Job Collection';

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

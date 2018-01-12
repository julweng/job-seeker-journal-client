import React from 'react';

import UserNav from '../components/userNav/userNav';
import UserHeader from '../components/userHeader/userHeader';
import AddJobForm from '../components/addJobForm/addJobForm';
import Footer from '../components/footer/footer';

const headerText = 'New Job Application';

export default function AddJob(Props) {
  return (
    <div>
      <UserNav />
      <main role="main">
        <UserHeader text={headerText}/>
        <section>
          <AddJobForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

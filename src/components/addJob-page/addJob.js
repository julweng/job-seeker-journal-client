import React from 'react';

import UserNav from '../common/userNav/userNav';
import UserHeader from '../common/userHeader/userHeader';
import AddJobForm from '../addJobForm/addJobForm';
import Footer from '../comon/footer/footer';

const headerText = 'Add Job';

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

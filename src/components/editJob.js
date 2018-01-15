import React from 'react';

import UserNav from '../components/userNav/userNav';
import UserHeader from '../components/userHeader/userHeader';
import ViewJob from '../components/viewJob/viewJob';
import Footer from '../components/footer/footer';

const headerText = 'Edit Job';

export default function EditJob(Props) {
  return (
    <div>
      <UserNav />
      <main role="main">
        <UserHeader text={headerText}/>
        <section>
          <ViewJob />
        </section>
      </main>
      <Footer />
    </div>
    );
}

import React from 'react';

import UserNav from './common/userNav/userNav';
import UserHeader from './common/userHeader/userHeader';
import ViewJob from '../components/viewJob/viewJob';
import Footer from './common/footer/footer';

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

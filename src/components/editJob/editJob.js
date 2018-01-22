import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import ViewJob from './viewJob/viewJob';
import Footer from '../common/footer/footer';

const header = {
  headerId: 'user-header',
  h1Id: 'user-header-title',
  h1Text: 'Edit Job',
  h2Text: ''
}

export default function EditJob(Props) {
  return (
    <div>
      <TopNav />
      <main role="main">
      <Header
        headerId={header.headerId}
        h1Id={header.h1Id}
        h1Text={header.h1Text}
      />
        <section>
          <ViewJob />
        </section>
      </main>
      <Footer />
    </div>
    );
}

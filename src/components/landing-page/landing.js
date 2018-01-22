import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import FeatureCards from './featureCards/featureCards';
import SignUp from './signUp/signUp';
import Footer from '../common/footer/footer';

const header = {
  headerId: 'landing-header',
  h1Id: 'app-title',
  h1Text: `Job Seeker's Journal`,
  h2Text: <h2>Track & Manage</h2>
}

export default function Landing() {
    return (
        <div>
          <TopNav />
          <main role="main">
            <Header
              headerId={header.headerId}
              h1Id={header.h1Id}
              h1Text={header.h1Text}
              h2Text={header.h2Text}
            />
            <FeatureCards />
            <SignUp />
          </main>
          <Footer />
        </div>
    )
}

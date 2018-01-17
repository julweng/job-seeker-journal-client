import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from './landingHeader/header';
import FeatureCards from './featureCards/featureCards';
import SignUp from './signUp/signUp';
import Footer from '../common/footer/footer';

export default function Landing() {
    return (
        <div>
          <TopNav />
          <main role="main">
            <Header />
            <FeatureCards />
            <SignUp />
          </main>
          <Footer />
        </div>
    )
}

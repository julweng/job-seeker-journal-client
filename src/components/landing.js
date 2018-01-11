import React from 'react';

import TopNav from '../components/topNav/navigation-bar';
import Header from '../components/landingHeader/header';
import FeatureCards from '../components/featureCards/featureCards';
import SignUp from '../components/signUp/signUp';
import Footer from '../components/footer/footer';

export default function Landing(Props) {
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
  );
}

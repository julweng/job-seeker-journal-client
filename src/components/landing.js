import React from 'react';

import TopNav from '../components/topNav/navigation-bar';
import Header from '../components/landingHeader/header';
import FeatureCards from '../components/featureCards/featureCards';
import SignUp from '../components/signUp/signUp';

export default function Landing(Props) {
  return (
    <div>
      <TopNav />
      <main role="main">
        <Header />
        <FeatureCards />
        <SignUp />
      </main>
      <footer>Built by Julia Weng</footer>
    </div>
  );
}

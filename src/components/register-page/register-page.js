import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import SignUpContainer from './signUpContainer/signUpContainer';

export default function RegisterPage(props) {
  return (
    <div>
      <TopNav />
      <main role="main">
        <Header headerId={'user-header'} />
        <SignUpContainer />
      </main>
      <Footer />
    </div>
  );
}

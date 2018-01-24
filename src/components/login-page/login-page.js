import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import LogInContainer from './logInContainer/logInContainer';

export default function LoginPage(props) {
  return (
    <div>
      <TopNav />
      <main role="main">
        <Header headerId={'user-header'} />
        <LogInContainer />
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';

import UserNav from '../components/userNav/userNav';
import Header from '../components/dashboardHeader/header';

export default function Dashboard(Props) {
  return (
    <div>
      <UserNav />
      <main role="main">
        <Header />
      </main>
      <footer>Built by Julia Weng</footer>
    </div>
  );
}

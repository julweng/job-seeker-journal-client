import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import ViewJob from './viewJob/viewJob';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';

export function EditJob(props) {
  return (
    <div>
      <TopNav />
      <main role="main">
      <Header
        headerId={props.header.headerId}
        h1Id={props.header.h1Id}
      />
        <section>
          <ViewJob />
        </section>
      </main>
      <Footer />
    </div>
    );
}

const mapStateToProps = state => ({
  header: state.markup.header.editJob
});

export default connect(mapStateToProps)(EditJob);

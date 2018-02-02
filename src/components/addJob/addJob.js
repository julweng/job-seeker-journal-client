import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import JobForm from './jobForm/jobForm';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';

export function AddJob(props) {
  return (
    <div>
      <TopNav />
      <main role="main">
      <Header
        headerId={props.header.headerId}
        h1Id={props.header.h1Id}
        h1Text={props.header.h1Text}
      />
        <section>
          <JobForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.markup.header.addJob
});

export default connect(mapStateToProps)(AddJob);

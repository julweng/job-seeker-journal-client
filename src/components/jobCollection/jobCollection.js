import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import MonthlyJobCollections from './monthlyJobCollections/monthlyJobCollections';
import MonthButton from './monthButton/monthButton';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';

export function JobCollection(props) {
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
          <div className="row">
            <p>Select to view job items for a specific month</p>
            <p>Click the job item to edit</p>
            <MonthButton />
          </div>
          <div className="row">
            <MonthlyJobCollections />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.markup.header.jobCollection
});

export default connect(mapStateToProps)(JobCollection);

JobCollection.defaultProps = {
  header: {
    jobCollection: {
      headerId: '',
      h1Id: '',
      h1Text: ''
    }
  }
}

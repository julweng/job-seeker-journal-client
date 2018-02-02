import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import MonthlyJobCollections from './monthlyJobCollections/monthlyJobCollections';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';

export class JobCollection extends React.Component {
  render() {
    const { header } = this.props
    if(header) {
      return (
        <div>
          <TopNav />
          <main role="main">
          <Header
            headerId={header.headerId}
            h1Id={header.h1Id}
            h1Text={header.h1Text}
          />
            <section className="row">
              <MonthlyJobCollections />
            </section>
          </main>
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  header: state.markup.header.jobCollection,
  monthButton: state.markup.monthButton
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

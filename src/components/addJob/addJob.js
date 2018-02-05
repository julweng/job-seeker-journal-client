import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import JobForm from './jobForm/jobForm';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';

export class AddJob extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <main role="main">
        <Header
          headerId={this.props.header.headerId}
          h1Id={this.props.header.h1Id}
          h1Text={this.props.header.h1Text}
        />
          <section>
            <JobForm />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  header: state.markup.header.addJob
});

export default connect(mapStateToProps)(AddJob);

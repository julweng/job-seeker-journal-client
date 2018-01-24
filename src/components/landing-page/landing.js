import React from 'react';
import  { connect } from 'react-redux';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import FeatureCards from './featureCards/featureCards';
import Footer from '../common/footer/footer';

export function Landing(props) {
  return (
    <div>
      <TopNav />
      <main role="main">
        <Header
          headerId={props.header.headerId}
          h1Id={props.header.h1Id}
          h1Text={props.header.h1Text}
          h2Text={props.header.h2Text}
        />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.markup.header.landing

});

export default connect(mapStateToProps)(Landing);

Landing.defaultProps = {
  header: {
    landing: {
      headerId: '',
      h1Id: '',
      h1Text: ''
    }
  }
}

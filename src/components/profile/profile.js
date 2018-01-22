import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import CurrentSkill from './currentSkill/currentSkill';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';

const skills = [
  {
    id: '1',
    skill: 'HTML',
    experience: {
      months: 0,
      years: 1
    }
  },
  {
    id: '2',
    skill: 'CSS3',
    experience: {
      months: 0,
      years: 1
    }
  }
];

export function Profile(props) {
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
          <CurrentSkill skills={skills}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.markup.header.profile
});

export default connect(mapStateToProps)(Profile);

Profile.defaultProps = {
  header: {
    profile: {
      headerId: '',
      h1Id: '',
      h1Text: ''
    }
  }
}

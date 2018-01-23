import React from 'react';

import TopNav from '../common/topNav/navigation-bar';
import Header from '../common/header/header';
import MonthlyJobCollections from './monthlyJobCollections/monthlyJobCollections';
import MonthButton from './monthButton/monthButton';
import Footer from '../common/footer/footer';
import { connect } from 'react-redux';
/*
*/
export class JobCollection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.currentTarget.id)
      //get request
  }
  render() {
    const { header, monthButton } = this.props
    if(this.props) {
      return (
        <div>
          <TopNav />
          <main role="main">
          <Header
            headerId={header.headerId}
            h1Id={header.h1Id}
            h1Text={header.h1Text}
          />
            <section>
              <div className="row">
                <p>Select to view job items for a specific month</p>
                <p>Click the job item to edit</p>
                <MonthButton months={monthButton} handleClick={this.handleClick} />
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

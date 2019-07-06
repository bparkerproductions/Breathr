import React from 'react';
import { connect } from 'react-redux';

import Modal from './elements/Modal';
import Navbar from './global/Navbar';
import TimerControls from './app/Timer/TimerControls';
import VideoRender from './global/VideoRender';
import Search from './app/Search/Search';
import Collection from './app/Video/Collection';

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        {/* <Modal showButton={true} buttonText="Let's get to it">
          <div className="header-container bottom-line">
            <h2 className="title">Welcome to Breathr!</h2>
          </div>
          <p>This is a simple web app that lets you choose and collect your favorite sounds, and meditate to them. No special subscriptions, no extras. </p>
          <p className="bold">Want to get started?</p>
        </Modal> */}
        <TimerControls
          allToggled={this.props.allToggled}
          show={this.props.showTimer}>
        </TimerControls>

        <Search
          allToggled={this.props.allToggled}
          show={this.props.showSearch}>
        </Search>

        <Collection
          allToggled={this.props.allToggled}
          show={this.props.showCollection}>
        </Collection>

        <VideoRender></VideoRender>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSearch: state.isSearchToggled,
    showTimer: state.isTimerToggled,
    showCollection: state.isCollectionToggled,
    allToggled: state.allToggled
  };
}

export default connect(mapStateToProps)(App);
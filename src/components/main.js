import React from 'react';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { incrementVisitCount, createTimeTrack } from '../helpers/store/general';

import Navbar from './global/Navbar';
import IntroModal from './global/IntroModal';
import VideoRender from './global/VideoRender';
import TimerControls from './app/Timer/TimerControls';
import Search from './app/Search/Search';
import Collection from './app/Video/Collection';

class App extends React.Component {
  componentDidMount() {
    //increment localstorage visit count by one
    incrementVisitCount();
    createTimeTrack();
  }

  render() {
    return (
      <main>
        <NotificationContainer></NotificationContainer>
        <Navbar />
        <IntroModal videoPlayer={this.props.videoPlayer}></IntroModal>
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
    allToggled: state.allToggled,
    videoPlayer: state.videoPlayer
  };
}

export default connect(mapStateToProps)(App);
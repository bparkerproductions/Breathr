import React from 'react';
import Modal from './elements/Modal';
import Navbar from './global/Navbar';
import TimerControls from './app/Timer/TimerControls';
import VideoRender from './global/VideoRender';
import Search from './app/Search/Search';
import VideoContext from './../contexts/SelectedVideo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null
    }

    this.selectVideo = this.selectVideo.bind(this);
  }
  selectVideo(video) {
    this.setState({selectedVideo: video});
  }
  render() {
    return (
      <main>
        <Navbar />
        <Modal showButton={true} buttonText="Let's get to it">
          <div className="header-container bottom-line">
            <h2 className="title">Welcome to Breathr!</h2>
          </div>
          <p>This is a simple web app that lets you choose and collect your favorite sounds, and meditate to them. No special subscriptions, no extras. </p>
          <p className="bold">Want to get started?</p>
        </Modal>
        <TimerControls></TimerControls>

        <VideoContext.Provider value={this.selectVideo}>
          <Search></Search>
        </VideoContext.Provider>

        <VideoRender selectedVideo={this.state.selectedVideo}></VideoRender>
      </main>
    );
  }
}

export default App;
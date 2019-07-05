import React from 'react';
import { connect } from 'react-redux';

import VideoResult from './VideoResult';

const Collection = (props) => {
  if(props.show) {
    return (
      <section id="video-collection" className="column-center">
        <div className="inner-container">
          <header className="general">
            <i className="fas fa-bookmark icon"></i>
            <h3 className="white">Your Collection</h3>
          </header>
          <VideoResult grabFromCollection={true}></VideoResult>
        </div>
      </section>
    )
  }
  else return null;
}

const mapStateToProps = (state) => {
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps)(Collection);
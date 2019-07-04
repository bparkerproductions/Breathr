import React from 'react';
import { connect } from 'react-redux';

import VideoResult from './VideoResult';

const Collection = (props) => {
  return (
    <section id="video-collection" className="column-center">
      <div className="inner-container">
        <VideoResult grabFromCollection={true}></VideoResult>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps)(Collection);
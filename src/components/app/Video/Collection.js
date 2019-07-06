import React from 'react';

import VideoResult from './VideoResult';
import ComponentControls from './../Controls/ComponentControls';

const Collection = (props) => {
  if(props.show && props.allToggled) {
    return (
      <section id="video-collection" className="column-center">
        <div className="inner-container">
          <ComponentControls toggleType="collection"></ComponentControls>
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

export default Collection;
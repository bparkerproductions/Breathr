import React from 'react'

import VideoResult from './VideoResult'
import ComponentControls from './../Controls/ComponentControls'

const Collection = (props) => {
  function getCollectionClasses() {
    const show = props.show && props.allToggled
    return show ? 'column-center' : 'column-center hidden'
  }
  return (
    <section id="video-collection" className={getCollectionClasses()}>
      <div className="inner-container">
        <ComponentControls toggleType="collection"></ComponentControls>
        <header className="general">
          <i className="fas fa-bookmark icon"></i>
          <h3 className="white">Your Collection</h3>
        </header>

        <VideoResult
          grabFromCollection={true}
          canRemove={true}>
        </VideoResult>
      </div>
    </section>
  )
}

export default Collection;
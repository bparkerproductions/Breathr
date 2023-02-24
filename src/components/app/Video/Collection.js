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
      <div className="container">
        <ComponentControls toggleType="collection"></ComponentControls>
        <header className="general py-3">
          <i className="fas fa-bookmark icon fa-lg text-white me-2"></i>
          <h3 className="text-white m-0">Your Collection</h3>
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
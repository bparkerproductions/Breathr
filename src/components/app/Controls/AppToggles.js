import React from 'react';
import { connect } from 'react-redux';
import { toggleSearch, toggleTimer, toggleCollection } from './../../../actions/appToggles'

const AppToggles = (props) => {
  function getIconClasses(toggleType) {
    return props[toggleType] ? 'ui-button' : 'ui-button turned-off';
  }

  /**
   * Toggle either Search, Timer, or Collection. Update redux state to reflect
   */
  function toggleIcon(toggleType) {
    if (toggleType === 'search') props.toggleSearch();
    if (toggleType === 'timer') props.toggleTimer();
    if (toggleType === 'collection') props.toggleCollection();
  }

  return (
    <aside id="app-toggles" className="navbar-col me-2">
      <div onClick={()=>{toggleIcon('search')}}
      className={`${getIconClasses('isSearch')} mx-2`}>
        <i title="Toggle video search" className="fas fa-search fa-md"></i>
      </div>
      <div onClick={()=>{toggleIcon('timer')}}
      className={`${getIconClasses('isTimer')} mx-2`}>
        <i title="Toggle timer" className="fas fa-clock fa-md"></i>
      </div>
      <div onClick={()=>{toggleIcon('collection')}}
      className={`${getIconClasses('isCollection')} mx-2`}>
        <i title="Toggle your collection" className="fas fa-bookmark fa-md"></i>
      </div>
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    isSearch: state.isSearchToggled,
    isTimer: state.isTimerToggled,
    isCollection: state.isCollectionToggled
  }
}

export default connect(mapStateToProps, {
  toggleSearch,
  toggleTimer,
  toggleCollection
})(AppToggles);
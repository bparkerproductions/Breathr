import React from 'react';
import { connect } from 'react-redux';
import { toggleSearch, toggleTimer, toggleCollection } from './../../../actions';

const AppToggles = (props) => {
  function getIconClasses(toggleType) {
    return props[toggleType] ? 'ui-button' : 'ui-button turned-off';
  }

  function toggleIcon(toggleType) {
    //set it in global store now
    if(toggleType === 'search') props.toggleSearch();
    if(toggleType === 'timer') props.toggleTimer();
    if(toggleType === 'collection') props.toggleCollection();
  }

  return (
    <aside id="app-toggles" className="navbar-col">
      <div onClick={()=>{toggleIcon('search')}}
      className={getIconClasses('isSearch')}>
        <i className="fas fa-search"></i>
      </div>
      <div onClick={()=>{toggleIcon('timer')}}
      className={getIconClasses('isTimer')}>
        <i className="fas fa-clock"></i>
      </div>
      <div onClick={()=>{toggleIcon('collection')}}
      className={getIconClasses('isCollection')}>
        <i className="fas fa-bookmark"></i>
      </div>
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    isSearch: state.isSearchToggled,
    isTimer: state.isTimerToggled,
    isCollection: state.isCollectionToggled
  };
}

export default connect(mapStateToProps, {
  toggleSearch,
  toggleTimer,
  toggleCollection
})(AppToggles);
import React from 'react';
import { connect } from 'react-redux';
import { toggleSearch, toggleTimer, toggleCollection } from './../../../actions';

class AppToggles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: this.props.isSearch,
      timer: this.props.isTimer,
      collection: this.props.isCollection
    }
  }
  getIconClasses(toggleType) {
    return this.state[toggleType] ? 'ui-button' : 'ui-button turned-off';
  }
  toggleIcon(toggleType) {
    let selectedType = this.state[toggleType];
    this.setState({[toggleType]: !selectedType});

    //set it in global store now
    if(toggleType === 'search') this.props.toggleSearch();
    if(toggleType === 'timer') this.props.toggleTimer();
    if(toggleType === 'collection') this.props.toggleCollection();
  }
  render() {
    return (
      <aside className="app-toggles navbar-col">
        <div onClick={()=>{this.toggleIcon('search')}}
        className={this.getIconClasses('search')}>
          <i className="fas fa-search"></i>
        </div>
        <div onClick={()=>{this.toggleIcon('timer')}}
        className={this.getIconClasses('timer')}>
          <i className="fas fa-clock"></i>
        </div>
        <div onClick={()=>{this.toggleIcon('collection')}}
        className={this.getIconClasses('collection')}>
          <i className="fas fa-bookmark"></i>
        </div>
      </aside>
    )
  }
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
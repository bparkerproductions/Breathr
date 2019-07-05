import React from 'react';

class AppToggles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: true,
      timer: true,
      collection: false
    }
  }
  getIconClasses(toggleType) {
    return this.state[toggleType] ? 'ui-button' : 'ui-button turned-off';
  }
  toggleIcon(toggleType) {
    let selectedType = this.state[toggleType];
    this.setState({[toggleType]: !selectedType});
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

export default AppToggles;
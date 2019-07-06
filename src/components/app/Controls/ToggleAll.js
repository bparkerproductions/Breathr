import React from 'react';
import { connect } from 'react-redux';

import { toggleAll } from './../../../actions';

class ToggleAll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allToggled: true
    }

    this.toggleAll = this.toggleAll.bind(this);
  }
  getToggleAllClass() {
    return this.state.allToggled ? 'fas fa-eye-slash' : 'fas fa-eye';
  }

  toggleAll() {
    this.setState({ allToggled: !this.state.allToggled });
    this.props.toggleAll();
  }

  render() {
    return (
      <aside id="toggle-all" className="navbar-col">
        <div className="ui-button larger">
          <i onClick={this.toggleAll}
             className={`white ${this.getToggleAllClass()}`}></i>
        </div>
      </aside>
    )
  }
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  toggleAll
})(ToggleAll);
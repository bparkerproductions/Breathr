import React from 'react';
import AppToggles from './../app/Toggles/AppToggles';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="column-center main-nav">
        <div className="inner-container">
          <div className="left"></div>

          <div className="right">
            <AppToggles></AppToggles>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
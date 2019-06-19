import React from 'react';
import Modal from './elements/Modal';
import Navbar from './global/Navbar';
import TimerControls from './app/TimerControls';

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <Modal showButton={true} buttonText="Let's get to it">
          <div className="header-container bottom-line">
            <h2 className="title">Welcome to Breathr!</h2>
          </div>
          <p>This is a simple web app that lets you choose and collect your favorite sounds, and meditate to them. No special subscriptions, no extras. </p>
          <p className="bold">Want to get started?</p>
        </Modal>
        <TimerControls></TimerControls>
      </main>
    );
  }
}

export default App;
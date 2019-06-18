import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div>
    <section className="card intro-card column-center">
      <div className="inner-container">
        <div className="content">
        <div className="header-container bottom-line">
          <h2 className="title">Welcome to Breathr!</h2>
        </div>
        <p>This is a simple web app that lets you choose and collect your favorite sounds, and meditate to them. No special subscriptions, no extras. </p>
        <p className="bold">Want to get started?</p>
        <div className="button-container mt-small">
        <button className="button">Get To It</button>
        </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;

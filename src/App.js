import React from 'react';
import logo from './logo.svg';
import './App.scss';

let variable = 'hell';

function comp() {
  return <div>Hello</div>;
}
function App() {
  return (
    <div>
    {variable}

    <button className="button">
      Button size normal
    </button>
    </div>
  );
}

export default App;

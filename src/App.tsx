import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NameComponent from './NameComponent';

const App = () => (
  <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.tsx</code>
        and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a> */}
      <NameComponent lastName="Petrov" name="Ivan" />
      <NameComponent lastName="Smirnov" name="Alex" />
      <Counter />
    </header>
  </div>
);

export default App;

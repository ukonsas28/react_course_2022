import React from 'react';

import './App.css';
import NameComponent from './NameComponent';

const App = () => (
  <div className="wrapper">
    <h1>React APP</h1>
    <NameComponent firstName="Ivan" lastName="Smirnov" />
    <NameComponent firstName="Alex" lastName="Petrov" />
    <NameComponent firstName="Igor" lastName="Ivanov" />
  </div>
);

export default App;

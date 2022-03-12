import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';

const App = () => (
  <div className="wrapper">
    <MainContainer />
    <AuthContainer />
  </div>
);

export default App;

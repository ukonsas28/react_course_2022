import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP - MOUNT'), []);
  return (
    <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route path="/auth" element={<AuthContainer />} />
      <Route path="/reg" element={<RegistrationContainer />} />
    </Routes>
  );
};

export default App;

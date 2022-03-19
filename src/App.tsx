import React, { useEffect } from 'react';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP - MOUNT'), []);
  return (
    <>
      <MainContainer />
      <AuthContainer />
      <RegistrationContainer />
    </>
  );
};

export default App;

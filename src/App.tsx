import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';
import OneUserContainer from './containers/OneUserContainer';
import PageWrapper from './components/common/PageWrapper';

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP - MOUNT'), []);
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="product" element={<MainContainer />} />
        <Route path="product/:name" element={<OneUserContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="*" element={<h1 style={{ color: 'red' }}>NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default App;

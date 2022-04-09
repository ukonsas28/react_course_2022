import React, { useEffect } from 'react';
import MainPage from '../../components/pages/MainPage';
import makeRequest from '../../network';

const MainContainer = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await makeRequest({ url: '/character' });
      console.log(data);
    };
    getData();
  }, []);
  return <MainPage />;
};

export default MainContainer;

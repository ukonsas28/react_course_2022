import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import { GetUsersAction } from '../../store/users/actions';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);
  return <MainPage />;
};

export default MainContainer;

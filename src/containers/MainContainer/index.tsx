import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import MainPage from '../../components/pages/MainPage';
import { GetUsersAction } from '../../store/users/actions';
import { getUsers } from '../../store/users/selectors';

const MainContainer = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    dispatch(GetUsersAction());
    setSearch({ page: '1' });
  }, []);

  const currPage = +search.get('page')!;

  const prevHandler = () => {
    if (currPage !== 1) {
      setSearch({ page: `${currPage - 1}` });
    }
    dispatch(GetUsersAction(`${currPage - 1}`));
  };

  const nextHandler = () => {
    setSearch({ page: `${currPage + 1}` });
    dispatch(GetUsersAction(`${currPage + 1}`));
  };

  const userData = useSelector(getUsers);
  return <MainPage userData={userData} prevHandler={prevHandler} nextHandler={nextHandler} />;
};

export default MainContainer;

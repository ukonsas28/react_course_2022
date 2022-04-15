import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import MainPage from '../../components/pages/MainPage';
import { GetUsersAction } from '../../store/users/actions';
import { getUsers } from '../../store/users/selectors';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { state } = useLocation() as { state: { page: string } };

  const [search, setSearch] = useSearchParams();
  const currPage = +search.get('page')!;

  useEffect(() => {
    if (state?.page) {
      setSearch({ page: state.page });
      dispatch(GetUsersAction(+state.page));
    } else {
      dispatch(GetUsersAction(currPage));
    }
  }, []);

  const prevHandler = () => {
    if (currPage !== 1) {
      setSearch({ page: `${currPage - 1}` });
    }
    dispatch(GetUsersAction(currPage - 1));
  };

  const nextHandler = () => {
    if (currPage === 0) {
      setSearch({ page: `${currPage + 2}` });
      dispatch(GetUsersAction(currPage + 2));
    } else {
      setSearch({ page: `${currPage + 1}` });
      dispatch(GetUsersAction(currPage + 1));
    }
  };

  const userData = useSelector(getUsers);
  return <MainPage userData={userData} prevHandler={prevHandler} nextHandler={nextHandler} />;
};

export default MainContainer;

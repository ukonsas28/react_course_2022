import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneUserPage from '../../components/pages/OneUserPage';
import { ClearOneUserAction, GetOneUserAction } from '../../store/users/actions';
import { getOneUser } from '../../store/users/selectors';

const OneUserContainer = () => {
  const { id } = useParams();

  const user = useSelector(getOneUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOneUserAction(id!));
    return () => {
      dispatch(ClearOneUserAction());
    };
  }, []);

  return <OneUserPage userInfo={user} />;
};

export default OneUserContainer;

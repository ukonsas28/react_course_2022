import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../common/Button';

type OneUserPagePropsType = {
  userInfo: any;
};

const OneUserPage = ({ userInfo }: OneUserPagePropsType) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handler = () => {
    navigate('/users', { state });
  };

  return userInfo?.id ? (
    <>
      <h1>{userInfo?.name}</h1>
      <br />
      <ul>
        <li>{userInfo?.status}</li>
        <li>{userInfo?.species}</li>
        <li>{userInfo?.gender}</li>
        <li>{userInfo?.location?.name}</li>
      </ul>
      <br />
      <img src={userInfo?.image} alt={userInfo?.name} />
      <br />
      <Button title="НА СПИСОК ПОЛЬЗОВАТЕЛЕЙ" onClick={handler} />
    </>
  ) : (
    <p>LOADING</p>
  );
};
export default OneUserPage;

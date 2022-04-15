import React from 'react';
import { Link } from 'react-router-dom';
import style from './UserListItem.module.scss';

type UserListItemPropsType = {
  data: any;
};

const UserListItem = ({ data }: UserListItemPropsType) => (
  <div className={style.wrapper}>
    <Link to={`${data.id}`}>
      <h3>{data.name}</h3>
      <img src={data.image} alt={data.name} />
    </Link>
  </div>
);
export default UserListItem;

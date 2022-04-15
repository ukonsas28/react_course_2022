import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import style from './UserListItem.module.scss';

type UserListItemPropsType = {
  data: any;
};

const UserListItem = ({ data }: UserListItemPropsType) => {
  const [search] = useSearchParams();
  return (
    <div className={style.wrapper}>
      <Link to={`${data.id}`} state={{ page: search.get('page')! }}>
        <h3>{data.name}</h3>
        <img src={data.image} alt={data.name} />
      </Link>
    </div>
  );
};
export default UserListItem;

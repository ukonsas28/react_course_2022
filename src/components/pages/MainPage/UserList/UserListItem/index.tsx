import React, { useEffect } from 'react';

type UserListItemPropsType = {
  name: string;
  age: string;
};

const UserListItem = ({ name, age }: UserListItemPropsType) => {
  useEffect(() => console.log('USER_LIST_ITEM - MOUNT'), []);
  return (
    <li>
      <h3>{name}</h3>
      <p>{`${age} - лет`}</p>
    </li>
  );
};

export default UserListItem;

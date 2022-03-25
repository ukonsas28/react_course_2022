import React, { useEffect } from 'react';
import UserListItem from './UserListItem';

type UserListPropsType = {
  data: { id: number; name: string; age: string }[];
};
const UserList = ({ data }: UserListPropsType) => (
  // const clickHandler = () => {
  //   console.log('CLICK');
  // };
  // useEffect(() => {
  //   console.log('USER_LIST - MOUNT');
  //   document.addEventListener('click', clickHandler);

  //   return () => {
  //     console.log('USER_LIST - UNMOUNT');
  //     document.removeEventListener('click', clickHandler);
  //   };
  // }, []);

  <ul>
    {data.map((el) => (
      <UserListItem key={el.id} name={el.name} age={el.age} />
    ))}
  </ul>
);
export default UserList;

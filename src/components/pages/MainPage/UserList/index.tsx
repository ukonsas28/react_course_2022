import React from 'react';
import UserListItem from './UserListItem';
import style from './UserList.module.scss';

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

  <div className={style.wrapper}>
    {data.map((el) => (
      <UserListItem key={el.id} data={el} />
    ))}
  </div>
);
export default UserList;

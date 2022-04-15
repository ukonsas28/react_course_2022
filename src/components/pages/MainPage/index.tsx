import React from 'react';
import Button from '../../common/Button';
// import { useLocation } from 'react-router-dom';
// import Button from '../../common/Button';
// import { data } from '../../../helpers';
import UserList from './UserList';
import style from './MainPage.module.scss';

type MainPagePropsType = {
  userData: any[];
  nextHandler: () => void;
  prevHandler: () => void;
};
const MainPage = ({ userData, nextHandler, prevHandler }: MainPagePropsType) => (
  // useEffect(() => console.log('MAIN_PAGE - MOUNT'), []);

  // const { state } = useLocation() as { state: { isOpen: boolean } };
  // const location: any = useLocation();

  // const [listVisible, setListVisible] = useState(false);
  // const handler = () => {
  //   setListVisible((prev) => !prev);
  // };

  // useEffect(() => {
  //   if (location?.state?.isOpen) {
  //     setListVisible(true);
  //   }
  // }, [location?.state?.isOpen]);

  <div className={style.wrapper}>
    <Button title="PREV" onClick={prevHandler} />
    {userData.length ? <UserList data={userData} /> : <h1>LOADING</h1>}
    <Button title="NEXT" onClick={nextHandler} />
  </div>
);
export default MainPage;

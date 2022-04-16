import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonPropsType) => {
  console.log('Button render');

  return (
    <button className={style.wrapper} onClick={onClick} type="button">
      {title}
    </button>
  );
};

export default React.memo(Button);

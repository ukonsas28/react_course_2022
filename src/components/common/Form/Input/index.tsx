import React from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
};

const Input = ({ title, id, placeholder }: InputPropsType) => (
  <label className={style.wrapper} htmlFor={id}>
    <span>{title}</span>
    <input id={id} placeholder={placeholder} />
  </label>
);

export default Input;

import React from 'react';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <h1>Header</h1>
    <ul>
      <li>
        <a href="/">MAIN</a>
      </li>
      <li>
        <a href="/auth">AUTH</a>
      </li>
      <li>
        <a href="/reg">REG</a>
      </li>
    </ul>
  </header>
);

export default Header;

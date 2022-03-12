import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';

// const FooterStyle = { backgroundColor: 'red', fontSize: '20px' };

// const DescriptionWrapper = styled('div')`
//   color: green;
//   font-size: 50px;
//   margin: 30px;
// `;

const MainPage = () => (
  <PageWrapper>
    <main className={style.content}>
      <h1>Main content</h1>
    </main>
  </PageWrapper>
);

export default MainPage;

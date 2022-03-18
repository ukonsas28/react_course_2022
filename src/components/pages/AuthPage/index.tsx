import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => (
  <PageWrapper>
    <Form title="Авторизация">
      <Input title="Email" id="email" placeholder="Введите почту" />
      <Input title="Password" id="password" placeholder="Введите пароль" />
      <Button title="Войти" onClick={() => console.log('auth')} />
    </Form>
  </PageWrapper>
);

export default AuthPage;

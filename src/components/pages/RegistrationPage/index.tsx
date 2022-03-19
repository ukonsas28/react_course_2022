import React from 'react';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Form from '../../common/Form';
import PageWrapper from '../../common/PageWrapper';

const RegistrationPage = () => (
  <PageWrapper>
    <Form title="Регистрация">
      <Input title="Name" id="name" placeholder="Введите имя" />
      <Input title="Email" id="email" placeholder="Введите почту" />
      <Input title="Password" id="password" placeholder="Введите пароль" />
      <Input title="Repeat Password" id="repeatPassword" placeholder="Повторите пароль" />
      <Button title="Регистрация" onClick={() => console.log('registration')} />
    </Form>
  </PageWrapper>
);

export default RegistrationPage;

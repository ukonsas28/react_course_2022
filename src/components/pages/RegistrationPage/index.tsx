import React, { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Form from '../../common/Form';
import PageWrapper from '../../common/PageWrapper';
import PasswordInput from '../../common/Form/PasswordInput';

const RegistrationPage = () => {
  const [name, setName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [repeatPassword, setRepeatPassword] = useState({ value: '', error: false });

  const validation = () => {
    if (!repeatPassword.value.length || !password.value.length) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }
    if (repeatPassword.value !== password.value) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }
    setPassword((prev) => ({ ...prev, error: false }));
    setRepeatPassword((prev) => ({ ...prev, error: false }));
    return true;
  };

  const submitHandler = () => {
    if (validation()) {
      console.log('registration');
    }
  };

  return (
    <PageWrapper>
      <Form title="Регистрация">
        <Input value={name} setValue={setName} title="Name" id="name" placeholder="Введите имя" />
        <Input
          value={email}
          setValue={setEmail}
          title="Email"
          id="email"
          placeholder="Введите почту"
        />
        <PasswordInput
          value={password}
          setValue={setPassword}
          title="Password"
          id="password"
          placeholder="Введите пароль"
          validation={validation}
        />
        <PasswordInput
          value={repeatPassword}
          setValue={setRepeatPassword}
          title="Repeat Password"
          id="repeatPassword"
          placeholder="Повторите пароль"
          validation={validation}
        />
        <Button title="Регистрация" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};
export default RegistrationPage;

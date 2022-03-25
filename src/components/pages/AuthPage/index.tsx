import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [hasError, setHasError] = useState(false);
  const submitHandler = () => {
    if (password.value.length > 10) {
      setHasError(false);
      console.log({ emailUser: email, password });
    } else {
      setHasError(true);
      console.log('Error');
    }
  };

  useEffect(() => {
    if (password.value.length > 10) {
      setHasError(false);
    } else if (password.value.length > 0) {
      setHasError(true);
    }
  }, [password]);

  return (
    <PageWrapper>
      <Form title="Авторизация">
        <Input
          title="Email"
          id="email"
          placeholder="Введите почту"
          value={email}
          setValue={setEmail}
        />
        <Input
          title="Password"
          id="password"
          placeholder="Введите пароль"
          value={password}
          setValue={setPassword}
          type="password"
        />
        {hasError && (
          <div>
            <span>Пароль должден быть больше 10 символов</span>
          </div>
        )}

        <Button title="Войти" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;

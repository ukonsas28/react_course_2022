import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SetUserNameAction } from '../../../store/auth/actions';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';

const getTitle = () => {
  for (let i = 0; i < 1000000000; i += 1) {
    // hard logick
  }
  return 'Войти';
};

const AuthPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const submitHandler = useCallback(() => {
    if (password.length > 10) {
      setHasError(false);
      dispatch(SetUserNameAction(name));
      console.log({ name, password });
    } else {
      setHasError(true);
      console.log('Error');
    }
  }, [password]);

  useEffect(() => {
    if (password.length > 10) {
      setHasError(false);
    } else if (password.length > 0) {
      setHasError(true);
    }
  }, [password]);

  const title = getTitle();

  return (
    <Form title="Авторизация">
      <Input title="Name" id="name" placeholder="Введите почту" value={name} setValue={setName} />
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
  );
};

export default AuthPage;

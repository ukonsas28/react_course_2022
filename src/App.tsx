import React from 'react';
import './App.css';
import Counter from './Counter';
import Form from './Form';
import Input from './Input';
import NameComponent from './NameComponent';
import logo from './logo512.png';

const App = () => (
  <div className="wrapper">
    <h1>React APP</h1>
    <NameComponent firstName="Ivan" lastName="Smirnov" />
    <Counter title="Апельсин" />
    <Counter title="Ананас" />
    <Form title="Auth">
      <Input />
      <Input />
    </Form>
    <Form title="Reg">
      <Input />
      <Input />
      <Input />
      <Input />
    </Form>
    <img src={logo} alt="test" />
    <img src="/image/logo192.png" alt="test2" />
  </div>
);

export default App;

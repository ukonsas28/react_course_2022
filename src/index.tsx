import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const element = <p className="text">Hello React</p>;

// const textElement = React.createElement('p', { className: 'text' }, 'Hello React');
// const wrapper = React.createElement(
//   'div',
//   { style: { backgroundColor: 'red', padding: '50px' } },
//   textElement
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

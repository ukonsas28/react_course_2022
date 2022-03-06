/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React, { useState } from 'react';

const Counter = () => {
  let [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
  const handler = () => {
    state += 1;
    console.log(state);

    // setState((prev) => prev + 1);
  };
  const handler2 = () => {
    setState2((prev) => prev + 1);
  };
  console.log(state);

  return (
    <div className="wrapper">
      <p className="text">{state}</p>
      <button type="button" onClick={handler}>
        PUSH
      </button>
      <button type="button" onClick={handler2}>
        PUSH2
      </button>
    </div>
  );
};
export default Counter;

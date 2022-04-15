import React from 'react';

type NameComponentPropsType = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  const { firstName, lastName } = props;
  // const handler = (event: SyntheticEvent) => {
  //   console.log(event.currentTarget, 'currentTarget');
  //   console.log(event.target, 'target');
  // };

  // const mainHandler = (event: SyntheticEvent) => {
  //   console.log(event.currentTarget, 'currentTarget');
  //   console.log(event.target, 'target');
  // };

  return (
    <div role="presentation" className="name_wrapper">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button type="button">CLICK ME</button>
    </div>
  );
};

export default NameComponent;

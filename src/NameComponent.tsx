import React from 'react';

type PropsType = {
  name: string;
  lastName: string;
};
const NameComponent = ({ name, lastName }: PropsType) => (
  <div className="wrapper">
    <p className="text">{name}</p>
    <p className="text">{lastName}</p>
  </div>
);
export default NameComponent;

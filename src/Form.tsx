import React from 'react';

type FormPropsType = {
  title: string;
};

const Form: React.FC<FormPropsType> = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <div className="form_inputs">{children}</div>
  </div>
);

export default Form;

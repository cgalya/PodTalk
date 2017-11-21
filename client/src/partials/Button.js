import React from 'react';

const Button = (props) => (
  <button className={props.className}>{props.label}</button>
);

export default Button;
import React from 'react';

const Input = (props) => (
  <input type="text" placeholder={props.placeholder} className={props.className}/>
);

export default Input;
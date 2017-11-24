import React from 'react';

const Logo = (props) => (
  <div className={props.className}>
    <img src={props.src} alt="" />
  </div>
);

export default Logo;
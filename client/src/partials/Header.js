import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="left">
      <img src="" alt=""/>
    </div>
    <div className="right">
      {props.children}
    </div>
  </div>
)
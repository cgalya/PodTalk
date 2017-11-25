import React from 'react';
import "./List.css";

const List = ({podcast_title, children}) => {
  return (
  	<div>
	  	<h1><strong>{podcast_title} - Episodes Found: {children.length}</strong></h1>
		  <div className="list-box">
		  	{children}
		  </div>
	  </div>
	);  
};

export default List;
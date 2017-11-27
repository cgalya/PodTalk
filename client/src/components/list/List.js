import React from 'react';
import "./List.css";

const List = ({podcast_title, children}) => {
  return (
  	<div>
	  	<h1><strong>{children.length} Results Found for: "{podcast_title}"</strong></h1>
		  <div className="list-box">
		  	{children}
		  </div>
	  </div>
	);  
};

export default List;
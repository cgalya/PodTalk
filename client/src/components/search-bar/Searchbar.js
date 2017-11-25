import React from "react";
import Input from "../input/Input";
import "./Searchbar.css";

const Searchbar = props =>
	<div>
	  <label>Search Bar</label>
		<Input 
      onChange={props.handleInputChange} 
			value={props.value}
      name="podcast_title"
      type="text"
      className="form-control"
			id="title"
			required=""
		/>

		<div>
			<button type="submit" onClick={props.handleFormSubmit}><h4>Submit</h4></button>
		</div>
	</div>;

export default Searchbar;
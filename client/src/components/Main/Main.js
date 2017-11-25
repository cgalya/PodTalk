import React from "react";
import "./Main.css";

const Main= props =>
	<div className="main-container">
		<div className="main-container">
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><span className="glyphicon glyphicon-pencil"> </span> Query</strong></h1>
						</div>
						<div className="panel-body">
							<form>
								<div className="form-group">
									<h4><strong>Title:</strong></h4>
									<input   
							      onChange={props.handleInputChange} 
										value={props.value}
							      name="title"
	                  type="text"
	                  className="form-control"
										id="title"
										required=""
	                />
								</div>
								
								<div className="pull-right">
									<button type="submit" onClick={props.handleFormSubmit} className="btn"><h4 style={{color: '#2c3e50'}}>Submit</h4></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;

export default Main;
import React, { Component } from 'react';
import Button from "./../partials/Button";
import Input from "./../partials/Input";
import "./SignUp.css";

class SignUp extends Component {
  state = {

  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          <h2>Sign Up:</h2>
          <div> 
            <div>
              <label>Username: </label>
              <Input   
                onChange={this.handleInputChange} 
                value={this.value}
                name="username"
                type="text"
                className="form-control"
                id="username"
                required=""
              />
            </div>

            <div>
              <label>Email: </label>
              <Input 
                onChange={this.handleInputChange} 
                value={this.value}
                name="email"
                type="text"
                className="form-control"
                id="email"
                required=""
               />
            </div>

            <div>
              <label>Password: </label>
              <Input 
                onChange={this.handleInputChange} 
                value={this.value}
                name="password"
                type="text"
                className="form-control"
                id="password"
                required=""
              />
            </div>

            <div>
              <label>Confirm password: </label>
              <Input 
                onChange={this.handleInputChange} 
                value={this.value}
                name="password"
                type="text"
                className="form-control"
                id="password"
                required=""
              />
            </div>
          </div>
        </form>
        <div style={{clear: "both"}}>
          <Button
            value="Submit"
            label="Save"
            onClick={this.handleFormSubmit}
          />
        </div>
      </div>
    );
  };
}

export default SignUp;